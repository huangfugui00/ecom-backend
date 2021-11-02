const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminUser =require('../admin/user')
// const AdminProduct = require('../model/product')
const AdminProduct =require('../admin/product')

/** @type {import('admin-bro').AdminBroOptions} */


const options = {
  resources: [
    AdminProduct,
    AdminUser,
  ],
};

module.exports = options;
