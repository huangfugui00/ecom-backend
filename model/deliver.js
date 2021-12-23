const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeliverSchema = new Schema(
    {
        address:{
            type:String,
            required:true
        },
        default:{
            type:Boolean,
            default:false,
        },
        person:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        userId:{
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        }
    }
)

module.exports = mongoose.model('Deliver', DeliverSchema)
// module.exports = mongoose.model('Deliver', DeliverSchema)