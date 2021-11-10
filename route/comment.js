const express = require('express')
const comment = require('../controller/comment')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/',auth.protect,comment.createComment)
module.exports=router