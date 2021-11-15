const express = require('express')
const order = require('../controller/order')
const Auth = require('../middleware/auth')

const router = express.Router()

router.get('/',Auth.protect,order.getOrders)
router.post('/',Auth.protect,order.createOrder)
// router.put('/:id',Auth.protect,order.updateOrder)
router.delete('/:id',Auth.protect,order.deleteOrder)
router.get('/:id',Auth.protect,order.getOrder)

module.exports=router