const User = require('../../model/user')
const {before:passwordBeforeHook} = require('./hook/password.hook')
const options = {
    properties:{
        password: {
            type: 'password',
        },
        hashPassword:{
            isVisible: false,
        }
    },
    actions:{
        new: {
            before: async (request) => {
                return  passwordBeforeHook(request);
            },
          },
    }
 
};


module.exports = {
    options,
    resource: User,
};