const {  buildAuthenticatedRouter } = require('admin-bro-expressjs');
const User = require('../model/user');

const adminRouter = (admin)=>{
    const router =  buildAuthenticatedRouter(admin,{
        authenticate: async (email, password) => {
        const user = await User.findOne( {email: email})
        if(! user || !user.isAdmin){
            return  false
        }
        const isMatch = await  user.matchPassword(password)
        if(!isMatch){
            return false
        }
        return user
        },
        cookiePassword: 'some-secret-password-used-to-secure-cookie',  
    })
    return router
}

module.exports = adminRouter