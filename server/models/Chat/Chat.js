const mongoose = require('mongoose')
const { Schema } = mongoose;

const chatSchema = new Schema({

    recipientsId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],

    createdAt: String,


})

const Chat = model('Chat', chatSchema)

module.exports = Chat;