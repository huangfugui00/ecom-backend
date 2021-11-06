const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeliverSchema = new Schema(
    {
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
        }
    }
)

module.exports = mongoose.model('Deliver', DeliverSchema)