const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productInOrderSchema = new Schema(
    {
        product:{
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required:true
        },
        num:{
           type:Number,
           required:true
        }
    }
   
)

const OrderSchema = new Schema(
    {
        status:{
            type: String,
            enum : ['unPay','pay'],
            default: 'unPay',
        },
        delivery:{
            type: mongoose.Schema.ObjectId,
            ref: 'Deliver',
            required:true,
        },
        products:{
            type:[productInOrderSchema]
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
    },
    { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
)


  module.exports = mongoose.model('Order', OrderSchema)