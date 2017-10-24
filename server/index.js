const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use('/', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {});

module.exports = app;
