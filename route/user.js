const express = require('express')
const User = require('../controller/user')
const Auth = require('../middleware/auth')

const router = express.Router()

router.post('/',User.register)
router.post('/login',User.login)
router.post('/me', Auth.protect,User.getMe)

module.exports=router
