const express = require('express')
const bodyParser = require('body-parser')
const DBConnection = require('./config/db')
const AdminBro  = require('admin-bro');
const AdminOption = require('./config/admin')
const adminRouter = require('./route/admin')

DBConnection()

const app = express();
const admin  = new AdminBro(AdminOption)
app.use(admin.options.rootPath, adminRouter(admin));
app.use(express.static('./'));

app.use(express.json())


const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(port))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
})
