const express = require('express')
const cart = require('../controller/cart')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/',auth.protect,cart.addToCart)
router.get('/',auth.protect,cart.getCart)
router.delete('/:id',auth.protect,cart.deleteCart)
router.put('/',auth.protect ,cart.syncCart)
module.exports=router