const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');
const compression = require('compression');

const app = express();

// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
const accessLogStream = fs.createWriteStream('/var/log/access.log', { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use('/', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {});

module.exports = app;
