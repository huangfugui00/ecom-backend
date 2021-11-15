const express = require('express')
const morgan = require('morgan') 
var fs = require('fs')
var path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const DBConnection = require('./config/db')
const consoleMiddle = require('./middleware/consoleMid')
const AdminBro  = require('admin-bro');
const AdminOption = require('./config/admin')
const adminRouter = require('./route/admin')
const productRouter = require('./route/product')
const userRouter = require('./route/user')
const favoriteRouter = require('./route/favorite')
const commentRouter = require('./route/comment')
const deliverRouter = require('./route/deliver')
const cartRouter = require('./route/cart')
const payRouter = require('./route/pay')



DBConnection()

const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

const admin  = new AdminBro(AdminOption)
app.use(admin.options.rootPath, adminRouter(admin))
app.use(express.static('./'))
app.use(cors())

app.use(express.json())
app.use(consoleMiddle)


const versionOne = (routeName) => `/${routeName}`
app.use(versionOne('product'), productRouter)
app.use(versionOne('user'), userRouter)
app.use(versionOne('favorite'), favoriteRouter)
app.use(versionOne('comment'), commentRouter)
app.use(versionOne('deliver'), deliverRouter)
app.use(versionOne('cart'), cartRouter)
app.use(versionOne('pay'), payRouter)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message)
})


const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(port))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
})
