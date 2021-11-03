const Utils = require('../utils/util')
const Product = require('../model/product')

const productControl = {
    async getProducts(req,res,next){
        const products = await Product.find({})
        Utils.responseClient(res,1,200,'',products);  
    }, 

    async getProduct(req,res,next){
        const product = await Product.findById(req.params.id)
        if (!product) {
            return Utils.responseClient(res,1,404,'产品不存在');
        }
        Utils.responseClient(res,1,200,'',product);  
    }, 
}

module.exports = productControl