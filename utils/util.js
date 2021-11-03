const Utils={
    // 响应客户端
    responseClient(res, httpCode = 200, message = '服务端异常', data = {}) {
        let responseData = {};
        responseData.message = message;
        responseData.data = data;
        res.status(httpCode).json(responseData);
    },
}

module.exports=Utils
