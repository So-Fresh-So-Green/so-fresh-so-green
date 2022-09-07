const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const commentSchema = new Schema(
    {
        commentContent: {
        type: String,
        required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (val) => dateFormat(val)
        },
        username: {
            type: String,
            required: true,
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
