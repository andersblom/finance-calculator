const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandlers = require('./handlers/errors');

require('dotenv').config({
	path: './.env',
});

const app = express();

if (process.env.NODE_ENV === 'dev') {
	app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true,
}));

mongoose.connect(app.settings.env === 'test' ? process.env.TEST_MONGO_URL : process.env.MONGO_URL, { useMongoClient: true }, function (err) {
	if (err) {
		console.log('🖥  🛑 Error connecting to the database. ' + err);
	} else {
		process.env.NODE_ENV === 'test' ? null : console.log('db connected');
	}
});
mongoose.Promise = global.Promise;

app.use('/', routes);

app.use(errorHandlers.logErrors);
app.use(errorHandlers.sendClientErrors);
app.use(errorHandlers.catchAllErrors);

module.exports = app;