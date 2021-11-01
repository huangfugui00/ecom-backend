const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            uniqueCaseInsensitive: true,
            match: [
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              'Please add a valid email'
            ],
          },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: [6, 'Must be six characters long'],
            //select: false //find时不会自动加入，需显示select
        },
        isAdmin: { 
            type: Boolean, 
            default: false 
        },
    }
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }
  

module.exports = mongoose.model('User', UserSchema)