const { Schema, model } = require('mongoose');
const Comment = require('./Comment')
const dateFormat = reqruire('../utils/dateFormat')

const postSchema = new Schema(
    {
        postTitle: {
        type: String,
        required: true,
        maxLength: 280,
        trim: true
        },
        postContent: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (val) => dateFormat(val)
        },
        username: {
            type: String,
            required: true,
        },
        plant: {
            type: Schema.Types.ObjectId,
            ref: 'Plant'
        },
        comments: [Comment.schema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

postSchema.virtual('commentCount').get(function() {
    return this.comments.length
})

const Post = model('Post', postSchema);

module.exports = Post;
