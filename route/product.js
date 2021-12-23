const express = require('express')
const Auth = require('../middleware/auth')
const Product = require('../controller/product')

const router = express.Router()

router.get('/',Product.getProducts)
router.get('/:id',Product.getProduct)
module.exports=router