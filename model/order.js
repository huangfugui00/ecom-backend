const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productInOrderSchema = new Schema(
    {
        product:{
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required:true
        },
        numInCart:{
           type:Number,
           required:true
        }
    }
)

productInOrderSchema.post('find', async function(products) {
    for (let product of products) {
        await product.populate({ path: 'product' });
    }
  });

const OrderSchema = new Schema(
    {
        status:{
            type: String,
            enum : ['unPay','pay'],
            default: 'unPay',
        },
        deliver:{
            type: mongoose.Schema.ObjectId,
            ref: 'Deliver',
            required: true
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