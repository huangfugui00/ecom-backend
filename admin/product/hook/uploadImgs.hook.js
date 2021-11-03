const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const config = require('../../../config/config')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record } = context;
  const uploadImgs =  Object.keys(request.payload)
    .filter(key =>key.startsWith('upload'))
    .reduce((obj, key) => {
      obj[key] = request.payload[key];
      return obj;
    }, {});
  let uploadImgsPath =[]
  if (record.isValid() && Object.keys(uploadImgs).length) {
    for(key in uploadImgs) {
      let uploadImg = uploadImgs[key];
      const filePath = path.join(config.DIR.imgs, record.id().toString(), uploadImg.name).replace(/\\/g,'/');
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

      var readStream=fs.createReadStream(uploadImg.path);
      var writeStream=fs.createWriteStream(filePath);
      readStream.pipe(writeStream);

      uploadImgsPath.push(`/${filePath}`)
    }
    
    
    const uploadedImgs =  record.params.imgs
    if(uploadedImgs) {
      for(let i=0;i<uploadedImgs.length;i++){
        let uploadedImg = uploadedImgs[i]
        uploadedImg= path.join( process.cwd() ,uploadedImg) 
        await fs.promises.unlink(uploadedImg)
        .catch((err)=>{
          console.log(err);
        })
      }
    }
    await record.update({ imgs: uploadImgsPath });
  }
  return response;
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const { uploadThumb, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.uploadThumb = uploadThumb;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
