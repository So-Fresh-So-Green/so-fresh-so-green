const { AuthenticationError, UserInputError } = require('apollo-server-express');

const {Post, User} = require('../../models')

module.exports = {
    Query: {
        async posts(){
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
    }, 
    Mutation: {
        createPost: async (_, { body, image }, context) => {
            if (context.user) {
              if (body.trim() === '' && image.trim() === '') {
                throw new Error('Post must include either a body or an image')
              }
              const newPost = new Post({
                body, 
                username: context.user.username,
                createdAt: new Date().toISOString(),
                image,
                userId: context.user._id
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
    }
}