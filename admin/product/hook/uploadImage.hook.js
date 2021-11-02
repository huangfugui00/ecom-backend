const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const config = require('../../../config/config')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record } = context;
  const uploadThumb =  request.payload.uploadThumb;

  if (record.isValid() && uploadThumb) {
    const filePath = path.join(config.DIR.thumb, record.id().toString(), uploadThumb.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    var readStream=fs.createReadStream(uploadThumb.path);
    var writeStream=fs.createWriteStream(filePath);
    readStream.pipe(writeStream);

    if(record.params.thumb  !== undefined) {
      const oldThumb = path.join( process.cwd() ,record.params.thumb) 
      await fs.promises.unlink(oldThumb)
        .catch((err)=>{
          console.log(err);
        })
    }
  
    await record.update({ thumb: `/${filePath}` });
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
