const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sfsgDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// this is a comment 
// pw added

module.exports = mongoose.connection;
