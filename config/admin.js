const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminUser =require('../admin/user/user')
// const AdminProduct = require('../model/product')
const AdminProduct =require('../admin/product/product')
const AdminCategory =require('../admin/category/category')

/** @type {import('admin-bro').AdminBroOptions} */


const options = {
  resources: [
    AdminProduct,
    AdminUser,
    AdminCategory,
  ],
};

module.exports = options;
