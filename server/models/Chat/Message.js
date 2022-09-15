const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const messageSchema = new Schema({

    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    createdAt: String,

});

const Message = model('Message', messageSchema)

module.exports = Message;