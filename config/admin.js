const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const User =require('../model/user')
// const Video =require('../models/video')
const Product =require('../model/product')

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    {resource:User,
    options:{
      properties: {
        email: {
           isVisible: {
             list:true,edit:false,filter:true,show:true 
           }
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
    }},
    {resource:Product},
  ],
};

module.exports = options;
