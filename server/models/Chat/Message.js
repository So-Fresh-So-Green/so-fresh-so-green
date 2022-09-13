const mongoose = require('mongoose');
const { Schema } = mongoose;


const messageSchema = new Schema({

    sender: String,
    content: String,
    // chat: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Chat'
    // },
    createdAt: String,

});

const Message = model('Message', messageSchema)

module.exports = Message;