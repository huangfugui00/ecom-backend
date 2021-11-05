const Utils = require('../utils/util')
const Product = require('../model/product')

// const getProducts = asyncHandler(async (req, res) => {
//     const pageSize = 10
//     const page = Number(req.query.pageNumber) || 1
  
//     const keyword = req.query.keyword
//       ? {
//           name: {
//             $regex: req.query.keyword,
//             $options: 'i',
//           },
//         }
//       : {}
  
//     const count = await Product.countDocuments({ ...keyword })
//     const products = await Product.find({ ...keyword })
//       .limit(pageSize)
//       .skip(pageSize * (page - 1))
  
//     res.json({ products, page, pages: Math.ceil(count / pageSize) })
//   })

const productControl = {
    async getProducts(req,res,next){
        
        const products = await Product.find({})
            .populate('category')
            .populate('favorite')

        Utils.responseClient(res,1,200,'',products);  
    }, 

    async getProduct(req,res,next){
        const product = await Product.findById(req.params.id)
            .populate('comments')
        if (!product) {
            return Utils.responseClient(res,1,404,'产品不存在');
        }
        Utils.responseClient(res,1,200,'',product);  
    }, 
}


module.exports = productControl