const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
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
        
    },
    { timestamps: true }
    
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.hashPassword)
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