const { Schema, model } = require('mongoose');
const dateFormat = reqruire('../utils/dateFormat')

const plantSchema = new Schema(
    {
        plantName: {
        type: String,
        required: true,
        trim: true
        },
        waterSched: {
            type: Number,
        },
        plantPic: {
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
        username: {
            type: String,
            required: true,
            trim: true
        }
    },
);

const Plant = model('Plant', plantSchema);

module.exports = Plant;
