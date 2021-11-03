function consoleLog(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

module.exports = consoleLog
