const AdminBro = require('admin-bro');
const Product = require('../../model/product')
const {before:uploadThumbBeforeHook,after:uploadThumbAfterHook} = require('./hook/uploadThumb.hook')
const {before:uploadImgsBeforeHook,after:uploadImgsAfterHook} = require('./hook/uploadImgs.hook')

const options = {
    properties:{
        thumb:{
            isVisible: false,
        },
        imgs:{
            isVisible: false,
        },
        uploadImgs:{
            components: {
                edit: AdminBro.bundle('./component/uploadImgsEdit.tsx'),
              },
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
                const modifiedResponse = await uploadThumbAfterHook(res,req,context);
                return uploadImgsAfterHook(modifiedResponse,req,context);
            }
          },
        edit:{
            after: async (res,req,context) => {
                const modifiedResponse = await uploadThumbAfterHook(res,req,context);
                return uploadImgsAfterHook(modifiedResponse,req,context);
            }
        }
    }
};


module.exports = {
    options,
    resource: Product,
};