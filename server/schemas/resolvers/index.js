const postResolvers = require('./posts');
const userResolvers = require('./users');
const commentResolvers = require('./comments');
const plantResolvers = require('./plants')
const productResolvers = require('./products')
const orderResolvers = require('./orders')
const uploadResolvers = require('./uploads')
const chatResolvers = require('./chat')

const { GraphQLUpload } = require('graphql-upload');

// const customResolvers = {
//     Upload: GraphQLUpload
// }

module.exports = {
    Upload: GraphQLUpload,
    // customResolvers,
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    User: {
        postCount: (parent) => parent.posts.length,
        plantCount: (parent) => parent.plants.length,
        followerCount: (parent) => parent.followers.length,
        followingCount: (parent) => parent.following.length
    },
    Query: {
        ...postResolvers.Query,
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query,
        ...uploadResolvers.Query,
        ...chatResolvers.Query,
        // ...plantResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation,
        ...plantResolvers.Mutation,
        ...productResolvers.Mutation,
        ...orderResolvers.Mutation,
        ...uploadResolvers.Mutation,
        ...chatResolvers.Mutation
    }
};