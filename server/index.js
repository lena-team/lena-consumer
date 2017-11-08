const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');
const compression = require('compression');

const app = express();
const EXPRESS_LOG_FILE = process.env.EXPRESS_LOG_FILE || './access.log';

// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
const accessLogStream = fs.createWriteStream(`${EXPRESS_LOG_FILE}`, { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use('/', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {});

module.exports = app;
