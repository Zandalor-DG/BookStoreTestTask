const express = require('express');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRouter');
const userRouter = require('./routes/userRouter');
const bookStoreRouter = require('./routes/bookStoreRouter');
const shoppingCartRouter = require('./routes/shoppingCartRouter');
const cors = require('cors');
const multer = require('multer');
const multerUpload = require('./middleware/multerUpload');
const transactionRouter = require('./routes/transactionRouter');

const app = express();
const http = require('http');
const { getAllNotifications } = require('./controllers/notificationController');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: '*',
    credentials: true,
  },
});
let clients = {};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// io.on(`connection`, (socket) => {
//   console.log(`Client with id ${socket.id} connected`);
//   clients.push(socket.id);

//   socket.emit(`message`, `I'm server`);

//   socket.on(`message`, (message) => console.log(`Message: `, message));

// });

io.on('connection', (socket) => {
  console.log(`start socket >>`, clients);
  socket.on('authorizedUser', (userId) => {
    console.log(`authorized user>>>`, userId);
    clients[userId] = socket.id;
  });

  socket.on('notificationUser', (data) => {
    const sid = clients[data.userId];
    io.to(sid).emit('notifications', data);
    //socket.socket[sid].emit('notifications', data);
  });

  socket.on(`disconnect`, () => {
    console.log(`Client with id ${socket.id} disconnected`);
  });
});

app.use('/public', express.static(__dirname + '/public'));
app.use(
  multer({
    storage: multerUpload.storageConfig,
    fileFilter: multerUpload.fileFilter,
  }).single('filedata')
);

app.use('/account', accountRouter);
app.use('/user', userRouter);
app.use('/book', bookStoreRouter);
app.use('/shoppingcart', shoppingCartRouter);
app.use('/transaction', transactionRouter);

server.listen(4000, () => console.log('server started'));
