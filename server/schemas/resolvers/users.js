const { AuthenticationError, UserInputError } = require('apollo-server-express');
const {User} = require('../../models');
const { signToken } = require('../../utils/auth');

module.exports = {
    Query: {
        getUser: async (parent, {_id}, context) => {
            if (context.user) {
              const user = await User.findById(_id)
                .populate('plants')
                .populate('posts')
                .populate('followers')
                .populate('following')
                .populate({
                  path: 'orders.products',
                  populate: 'category'
                });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
              user.posts.sort((a, b) => b.createdAt - a.createdAt)
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
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

          followUser: async (_, {userId: _id}, context) => {
            const shepherd = await User.findById(_id)

            if (context.user) {
              if (shepherd.followers.find((sheep) => sheep == context.user._id)) {
                return new UserInputError('User is already following them')
              } else {
                const followedUser = await User.findByIdAndUpdate(
                  _id, 
                  {
                    $push: {followers: context.user._id}
                  },
                  {new: true}
                )

                const curUser = await User.findByIdAndUpdate(
                  context.user._id,
                  {
                    $push: {following: _id}
                  },
                  {new: true}
                )

                return followedUser.populate('followers')
              }
            }
            throw new AuthenticationError('Not logged in');
          }
    }
}