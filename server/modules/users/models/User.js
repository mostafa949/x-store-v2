const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, `Name can't be smaller than 2 characters`],
      maxlength: [64, `Name can't be greater than 64 characters`],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      maxlength: [64, `Email can't be greater than 64 characters`],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = mongoose.model('user', userSchema)

module.exports = User
