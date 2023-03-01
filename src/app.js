const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
// const http = require('http');
require('../src/config/db')
const Port = process.env.PORT
// const { Server } = require("socket.io");
dotenv.config();



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors({
    origin: '*'
}));
// const server = http.createServer(app);
// const io = new Server(server);
// const users = {}



// io.on('connection', (socket) => {
//     socket.on('new-user-joined', name => {
//         console.log(name, 'new user>>>>>')
//         users[socket.id]= name;
//         socket.broadcast.emit('user-joined', name)
//     });

//     socket.on('send', message => {
//         socket.broadcast.emit('recieve', {message: message, name:users[socket.id]})
//     });
//   });

//import Routes
const productRouter = require("./routers/product")
const userRouter = require("./routers/user") 
const chatRouter = require("./routers/chat") 
const messageRouter = require("./routers/message") 




//routes middleware
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/chat', chatRouter)
app.use('/api/message', messageRouter)

const server = app.listen(Port, () => {
    console.log(`server is running on port ${Port}`)
});

process.on('unhandledRejection', err =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() =>{
        process.exit(1);
    })
});