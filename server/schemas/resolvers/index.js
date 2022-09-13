const postResolvers = require('./posts');
const userResolvers = require('./users');
const commentResolvers = require('./comments');
const plantResolvers = require('./plants')
const productResolvers = require('./products')
const orderResolvers = require('./orders')
const uploadResolvers = require('./uploads')
const chatResolvers = require('./chat')

const { GraphQLUpload } = require('graphql-upload');


module.exports = {
    Upload: GraphQLUpload,
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postResolvers.Query,
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query,
        ...chatResolvers.Query

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