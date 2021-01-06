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
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let clients = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on(`connection`, (socket) => {
  console.log(`Client with id ${socket.id} connected`);
  clients.push(socket.id);

  socket.emit(`message`, `I'm server`);

  socket.on(`message`, (message) => console.log(`Message: `, message));

  socket.on(`disconnect`, () => {
    clients.splice(clients.indexOf(socket.id), 1);
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

app.listen(4000, () => console.log('server started'));
