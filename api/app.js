const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');
const errorHandlers = require('./handlers/errors');

const app = express();

if (process.env.NODE_ENV === 'dev') {
	app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use('/', routes);

app.use(errorHandlers.logErrors);
app.use(errorHandlers.sendClientErrors);
app.use(errorHandlers.catchAllErrors);

module.exports = app;