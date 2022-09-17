const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')
const Order = require('./Order')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please input a valid email address!']
    },
    bio: String,
    location: String,
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    profPic: {
      type: String,
      trim: true,
      default: 'https://sfsg-upload.s3.us-east-2.amazonaws.com/sfsglogo2.jpg'
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    plants: [{
      type: Schema.Types.ObjectId,
      ref: 'Plant'
    }],
    followers: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    following: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    orders: [Order.schema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual('plantCount').get(function() {
  return this.plants.length
})

userSchema.virtual('followingCount').get(function() {
  return this.following.length
})

userSchema.virtual('followerCount').get(function() {
  return this.followers.length
},
{ timestamps: true })

const User = model('User', userSchema);

module.exports = User;
