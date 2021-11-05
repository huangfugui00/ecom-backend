const AdminBro = require('admin-bro');
const Category = require('../../model/category')


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
    resource: Category,
};