const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
require('../src/config/db')
const Port = process.env.PORT
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//import Routes
const productRouter = require("./routers/product")
const userRouter = require("./routers/user")

//routes middleware
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

app.listen(Port, () => {
    console.log(`server is running on port ${Port}`)
})