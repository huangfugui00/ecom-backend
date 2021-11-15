const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeliverSchema = new Schema(
    {
        default:{
            type:Boolean,
            default:false,
        },
        address:{
            type:String,
            required:true
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