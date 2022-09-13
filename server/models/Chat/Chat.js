const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const chatSchema = new Schema({

    recipientsId: String,

    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],

    createdAt: String,


})

const Chat = model('Chat', chatSchema)

module.exports = Chat;
module.exports = Chat;