const jwt = require('jsonwebtoken')
const User = require('../model/user')
const Utils = require('../utils/util')
const config = require('../config/config')



const Auth={
    async protect(req,res,next){
        let token
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer'))
        {
            token = req.headers.authorization.split(' ')[1]
        }
        if (!token) {
            var err = new Error('error,login before');
            err.status = 400;
            next(err);
        }
        try {
            // Verify token
            const decoded = jwt.verify(token, config.JWT.secret)
            req.user = await User.findById(decoded.id)
            next()
          } catch (err) {
            var err = new Error('error,login before');
            err.status = 400;
            next(err);
            
        }
    },

      
}


module.exports = Auth