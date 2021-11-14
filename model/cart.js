const mongoose = require('mongoose')

const Schema = mongoose.Schema


const CartSchema = new Schema(
    {
        numInCart:{
            type: Number,
            required:true
        },
        productId:{
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required:true,
        },
        userId:{
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required:true,
        }
        
    }
)


CartSchema.post('find', async function(carts) {
    for (let cart of carts) {
        await cart.populate({ path: 'productId'});
    }
  });
  


  module.exports = mongoose.model('Cart', CartSchema)