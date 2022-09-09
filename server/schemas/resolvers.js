const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Product, Category, Order, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {

  //QUERIES//

  Query: {
    
    categories: async () => {
      return await Category.find();
    },

    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate('plants')
          .populate('posts')
          .populate('comments')
          .populate('followers')
          .populate('following')
          .populate({
            path: 'orders.products',
            populate: 'category'
          });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

    async getPosts(){
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err){
        throw new Error(err);
      }
    },

    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
        } catch (err) {
          throw new Error(err);
        }
      },

    getUserPost: async (_, args, context) => {
      try {
        const post = await Post.find({user: context.user._id}, (err, data) => {
          if (data) {
            return data
          } else {
            throw new Error('User has no posts')
          }
        })
      } catch (err) {
        throw new Error(err)
      }
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  //MUTATIONS//

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },

    createComment: async (_, {postId, body}, context) => {
      if (context.user) {
        if(body.trim() === '') {
          throw new UserInputError('Empty comment', {
            errors: {
              body: "Comment body can't be empty"
            }
          })
        }
        const post = await Post.findById(postId)
        if(post) {
          post.comments.unshift({
            body,
            username: context.user.username,
            userId: context.user._id,
            createdAt: new Date().toISOString()
          })
          await post.save()
          
          return post;
        }
      }
    },

    deleteComment: async(_, {postId, commentId}, context) => {
      const post = await Post.findById(postId)
      if (post) {
        const commentIndex = post.comments.findIndex(c => c.id === commentId)
        if(post.comments[commentIndex].username === context.user.username) {
          post.comments.splice(commentIndex, 1)
          await post.save()
          return post;
        }
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    async createPost(_, { body }, context) {
      if (context.user) {

        const newPost = new Post({
          body, 
          username: context.user.username,
          createdAt: new Date().toISOString(),
          user: context.user._id
        });

        const post = await newPost.save();

        await User.updateOne(
          {_id: context.user._id},
          {
            $push: {posts: post}
          },
          {new: true}
        )
        return post;
      }

      throw new AuthenticationError('Not logged in')
    },
    
    async deletePost(_, { postId }, context) {
      if (context.user) {
        const post = await Post.findById(postId);
          if (user.username === post.username){
            await post.delete();
            return 'Post deleted successfully';
          } else {
            throw new AuthenticationError('Action not allowed');
          }
      }

      throw new AuthenticationError('Not logged in')
    }
  }
};

module.exports = resolvers;
