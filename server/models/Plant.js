const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
    {
        name: {
        type: String,
        trim: true
        },
        waterSched: String,
        image: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        createdAt: String,
        username: {
            type: String,
            trim: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Plant = model('Plant', plantSchema);

module.exports = Plant;