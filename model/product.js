const mongoose = require('mongoose')
// const Category = require('./category');
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    price:{
        type:Number,
        required:true
    },
    thumb:{
        type: String,
    },
    countInStock:{
        type:Number,
        required: [true, 'You must tell me how many count in stock']
    },
    imgs:{
        type: Array,
    },
    intro:{
        type: String,
        required: [true, 'You must add a intro']
    },
    description: {
        type: String,
        required: [true, 'You must add a description']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
      },
    tags:{
        type:Array,
    }
  },
  { timestamps: true }
)


ProductSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'productId',
    justOne: false,
  })
  
ProductSchema.virtual('favorite', {
    ref: 'Favorite',
    localField: '_id',
    foreignField: 'productId',
    justOne: false,
    count: true,
})
// ProductSchema.statics.findByCateogry =  (category, callback)=> {
//     var query = this.findOne()
  
//     Category.findOne({'title': category}, function (error, category) {
//       query.where(
//         {title: category._id}
//       ).exec(callback);
//     })
//     return query
//   }


module.exports = mongoose.model('Product', ProductSchema)
