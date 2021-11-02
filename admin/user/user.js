const User = require('../../model/user')
const {before:passwordBeforeHook} = require('./hook/password.hook')
const options = {
    properties:{
        password: {
            type: 'password',
        },
        hashPassword:{
            isVisible: false,
        },
        createdAt:{
            isVisible: { list: false, filter: false, show: true, edit: false },
        },
        updatedAt:{
            isVisible: { list: false, filter: false, show: true, edit: false },
        }
    },
    actions:{
        new: {
            before: async (request) => {
                return  passwordBeforeHook(request);
            },
          },
        edit:{
            before: async (request) => {
                return  passwordBeforeHook(request);
            },
        }
    }
 
};


module.exports = {
    options,
    resource: User,
};