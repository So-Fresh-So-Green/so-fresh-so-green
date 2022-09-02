const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

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
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    profPic: {
      type: String,
      trim: true
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    plants: [{
      type: Schema.Types.ObjectId,
      ref: 'Plant'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
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

const User = model('User', userSchema);

module.exports = User;
