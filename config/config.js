const path = require('path');
const static='./static'

module.exports = {
    DIR : {
      thumb: `${static}/thumb`,
      video: `${static}/video`,
      videoThumb: `${static}/video/thumb`
    },
    SQL : {
      url: "mongodb://localhost:27017/ecom"
    },
    JWT : {
      secret:"mxhdxdsn12mxs9",
      expire_day:1
    }
  };