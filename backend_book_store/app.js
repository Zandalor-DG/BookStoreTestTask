const express = require('express');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const multer = require('multer');
const multerUpload = require('./middleware/multerUpload');

const app = express();

const http = require('http');
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use(
  multer({
    storage: multerUpload.storageConfig,
    fileFilter: multerUpload.fileFilter,
  }).single('filedata')
);
app.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field);
  next(err);
});
app.use('/account', accountRouter);
app.use('/user', userRouter);

server.listen(4000, () => console.log('server started'));
