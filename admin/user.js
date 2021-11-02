const User = require('../model/user')

const options = {
    properties:{
        password: {
            type: 'password',
        },
        hashPassword:{
            isVisible: false,
        }
    }
};


module.exports = {
    options,
    resource: User,
};