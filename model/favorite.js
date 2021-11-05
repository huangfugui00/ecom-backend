const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FavoriteSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
  },
//   { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
)

module.exports = mongoose.model('Favorite', FavoriteSchema)
