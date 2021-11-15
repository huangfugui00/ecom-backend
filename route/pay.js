const express = require('express')
const pay = require('../controller/pay')
const Auth = require('../middleware/auth')

const router = express.Router()

router.post('/',Auth.protect,pay.handleToken)

module.exports=router