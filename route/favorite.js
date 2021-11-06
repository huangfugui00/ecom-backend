const express = require('express')
const Favorite = require('../controller/favorite')
const Auth = require('../middleware/auth')

const router = express.Router()

router.post('/',Favorite.crateFavorite)
router.post('/check',Favorite.checkFavorite)
router.delete('/:id',Auth.protect,Favorite.deleteFavorite)
module.exports=router