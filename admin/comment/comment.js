const Comment = require('../../model/comment')
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
    resource: Comment,
};