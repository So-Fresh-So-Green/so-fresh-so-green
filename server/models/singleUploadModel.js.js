const {Schema, model} = require("mongoose");

module.exports.SingleFile = model('SingleFile', Schema({
    image: {
        type: String,
        required: true
    }
}, {timestamps: true}));