const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 280,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    default: ''
  },
  postedAt: {
    type: Date,
    default: Date.now,
    get: (val) => dateFormat(val)
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  plant: {
    type: Schema.Types.ObjectId,
    ref: 'Plant',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = model('Product', productSchema);

module.exports = Product;
