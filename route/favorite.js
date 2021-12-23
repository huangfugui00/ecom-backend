const express = require('express')
const Favorite = require('../controller/favorite')
const Auth = require('../middleware/auth')

const router = express.Router()

router.get('/',Auth.protect,Favorite.getFavorite)
router.post('/',Auth.protect,Favorite.crateFavorite)
router.post('/check',Auth.protect,Favorite.checkFavorite)
router.delete('/:id',Auth.protect,Favorite.deleteFavorite)
module.exports=router