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
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
)


// CommentSchema.post('find', async function(comments) {
//   for (let comment of comments) {
//       await comment.populate('userId');
//   }
// });

// CommentSchema.post('save', async function(comment) {
//       await comment.populate('userId');
// });

module.exports = mongoose.model('Favorite', FavoriteSchema)
