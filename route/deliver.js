const express = require('express')
const Deliver = require('../controller/deliver')
const Auth = require('../middleware/auth')

const router = express.Router()

router.post('/',Auth.protect,Deliver.createDeliver)
router.get('/',Auth.protect,Deliver.getDelivers)
router.get('/:id',Auth.protect,Deliver.getDeliver)
router.put('/:id',Auth.protect,Deliver.updateDeliver)
module.exports=router