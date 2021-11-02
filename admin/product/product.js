const AdminBro = require('admin-bro');
const Product = require('../../model/product')
const {before:uploadThumBeforeHook,after:uploadThumAfterHook} = require('./hook/uploadImage.hook')

const options = {
    properties:{
        thumb:{
            isVisible: false,
        },
        imgs:{
            isVisible: false,
        },
        uploadThumb: {
            components: {
              edit: AdminBro.bundle('./component/uploadThumbEdit.tsx'),
              list: AdminBro.bundle('./component/uploadImageList.tsx'),
              show: AdminBro.bundle('./component/uploadImageList.tsx'),
            },
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
            after: async (res,req,context) => {
                return  uploadThumAfterHook(res,req,context);
            }
          },
        edit:{
            after: async (res,req,context) => {
                return  uploadThumAfterHook(res,req,context);
            }
        }
    }
};


module.exports = {
    options,
    resource: Product,
};