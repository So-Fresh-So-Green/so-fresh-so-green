const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    image: String,
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
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = model('Post', postSchema);

module.exports = Post;