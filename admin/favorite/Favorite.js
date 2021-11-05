const Favorite = require('../../model/favorite')
const options = {
    properties:{
        createdAt:{
            isVisible: { list: false, filter: false, show: true, edit: false },
        },
        updatedAt:{
            isVisible: { list: false, filter: false, show: true, edit: false },
        }
    }
 
};


module.exports = {
    options,
    resource: Favorite,
};