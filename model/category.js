const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, 'Title must be three characters long'],
      trim: true,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, 'Title is required'],
    },
  },
)

CategorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'productId',
  justOne: false,
})


module.exports = mongoose.model('Category', CategorySchema)
