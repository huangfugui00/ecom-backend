const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config/config')
const Schema = mongoose.Schema



const UserSchema = new Schema(
    {
        username:{
          type:String,
          required: [true, 'Please add an username'],
          unique: true,
          uniqueCaseInsensitive: true,
          minlength: 3,
        },
        avatar:{
          type:String,
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            uniqueCaseInsensitive: true,
            match: [
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              'Please add a valid email'
            ],
            minlength: [6, 'Must be six characters long'],
          },
        hashPassword: {
            type: String,
            required: [true, 'Please add a password'],
        },
        isAdmin: { 
            type: Boolean, 
            default: false ,
        },
        // cart:{
        //     type:mongoose.Schema.ObjectId,
        //     ref:'Cart',


        // }
  
    },
    { timestamps: true }
    
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.hashPassword)
  }
  
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, config.JWT.secret, {
    expiresIn: `${config.JWT.expire_day}d`
  })
}

// UserSchema.set('toJSON', {
//   transform: function(req, res, opt) {
//       delete res['email']
//       delete res['hashPassword']
//       delete res['isAdmin']
//       return res
//   }
// })

module.exports = mongoose.model('User', UserSchema)