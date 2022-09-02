const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const saleSchema = new Schema(
    {
        saleTitle: {
            type: String,
            required: true,
            maxLength: 280,
            trim: true
        },
        saleDesc: {
            type: String,
        },
        postedAt: {
            type: Date,
            default: Date.now,
            get: (val) => dateFormat(val)
        }, 
        plant: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Plant'
            }
        ],
        price: {
            type: Number,
        }
    }
)

const Sale = model('Sale', saleSchema);

module.exports = Sale;
