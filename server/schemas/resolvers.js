const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Product, Category, Order, Post, Plant } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {

  //QUERIES//

  Query: {
    
    getCategories: async () => {
      return await Category.find();
    },

    allProducts: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Product.find(params).populate('plant').populate('category');
    },
    
    getProduct: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    
    getUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate('plants')
          .populate('posts')
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

    getOrder: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

    async allPosts(){
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
        const post = await Post.find({userId: context.user._id}, (err, data) => {
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
    createProduct: async(_, {name, description, image, price, plant, category}, context) => {
      if (context.user) {
        const newProduct = new Product({
          name,
          description,
          image,
          price,
          plant,
          category
        })
        const product = await newProduct.save()
        return product
      }
      throw new AuthenticationError('Not logged in')
    },
    updateProduct: async (parent, { _id, name, description, image, price, plant, category }) => {
      return await Product.findByIdAndUpdate(
        _id, {
              name,
              description,
              image,
              price,
              plant,
              category
            }, { new: true }
      );
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
    createPost: async (_, { body }, context) => {
      if (context.user) {
        const newPost = new Post({
          body, 
          username: context.user.username,
          createdAt: new Date().toISOString(),
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
    deletePost: async (_, { postId }, context) => {
      if (context.user) {
        const post = await Post.findById(postId);
          if (context.user._id === post.userId){
            await post.delete();
            return 'Post deleted successfully';
          } else {
            throw new AuthenticationError('Action not allowed');
          }
      }
      throw new AuthenticationError('Not logged in')
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
    likePost: async(_, {postId}, context) => {
      const username = context.user.username

      const post = await Post.findById(postId)
      if(post) {
        if(post.likes.find((like) => like.username === username)) {
          post.likes = post.likes.filter((like) => like.username !== username)
        } else {
          post.likes.push({
            username,
            createdAt: new Date().toISOString()
          })
        }

        await post.save()
        return post
      } else throw new UserInputError('Post not found')
    },
    addPlant: async(_, {name, waterSched, image, description}, context) => {
      if(context.user) {
        const newPlant = new Plant({
          name,
          waterSched,
          image,
          description,
          createdAt: new Date().toISOString(),
          username: context.user.username,
          userId: context.user._id
        });
        console.log(newPlant)
  
        const plant = await newPlant.save();
        
        await User.updateOne(
          {_id: context.user._id},
          {
            $push: {plants: plant}
          },
          {new: true}
        )
        return plant;
      }
      throw new AuthenticationError('Not logged in')
    },
    deletePlant: async (_, { plantId }, context) => {
      if (context.user) {
        const plant = await Plant.findById(plantId);
          if (context.user._id === plant.userId){
            await plant.delete();
            return 'Plant deleted successfully';
          } else {
            throw new AuthenticationError('Action not allowed');
          }
      }
      throw new AuthenticationError('Not logged in')
    },
  },
};

module.exports = resolvers;
