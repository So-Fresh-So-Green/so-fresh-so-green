const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const plantSchema = new Schema(
    {
        name: {
        type: String,
        required: true,
        trim: true
        },
        waterSched: {
            type: String,
        },
        image: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (val) => dateFormat(val)
        },
        user: {
            type: String,
            required: true,
            trim: true
        }
    },
);

const Plant = model('Plant', plantSchema);

module.exports = Plant;