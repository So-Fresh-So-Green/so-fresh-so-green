const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        createComment: async (_, {postId, body}, context) => {
            if (context.user) {
              if(body.trim() === '') {
                throw new UserInputError('Empty comment', {
                  errors: {
                    body: "Comment body can't be empty"
                  }
                })
              }
              const post = await Post.findById(postId).populate('comments')
              if(post) {
                post.comments.unshift({
                  body,
                  username: context.user.username,
                  userId: context.user._id,
                  createdAt: new Date().toISOString()
                })
                await post.save()
                console.log(post)
                return post;
              }
            }
          },
          
          deleteComment: async(_, {postId, commentId}, context) => {
            const post = await Post.findById(postId)
            if (post) {
              const commentIndex = post.comments.findIndex(comment => comment.id === commentId)
              if(post.comments[commentIndex].userId == context.user._id) {
                post.comments.splice(commentIndex, 1)
                await post.save()
                console.log(post)
                return post;
              }
            }
          },
    }
}