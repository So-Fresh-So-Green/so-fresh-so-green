const { Schema, model } = require('mongoose');

// IAN'S PACKAGES BELOW //

// const Comment = require('./Comment')
// const dateFormat = require('../utils/dateFormat')

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            userId: Schema.Types.ObjectId,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    plant: {
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}

    // IAN'S MODEL BELOW //

    // {
    //     title: {
    //     type: String,
    //     required: true,
    //     maxLength: 280,
    //     trim: true
    //     },
    //     content: {
    //         type: String,
    //         required: true,
    //     },
    //     createdAt: {
    //         type: Date,
    //         default: Date.now,
    //         get: (val) => dateFormat(val)
    //     },
    //     username: {
    //         type: String,
    //         required: true,
    //     },
    //     plant: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Plant'
    //     },
    //     comments: [Comment.schema]
    // },
    // {
    //     toJSON: {
    //         virtuals: true
    //     },
    //     id: false,
    // }
);

// IAN'S SCHEMA POSTS BELOW //

// postSchema.virtual('commentCount').get(function() {
//     return this.comments.length
// })

const Post = model('Post', postSchema);

module.exports = Post;

// module.exports = model('Post', postSchema)