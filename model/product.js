const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    price:{
        type:Number,
        required:true
    }    ,
    thumb:{
        type: String,
        required: [true, 'You must add a thumb pic']
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
    category:{
        type:String,
    },
    tags:{
        type:Array,
    }


  },
  { timestamps: true }
)


module.exports = mongoose.model('Product', ProductSchema)
