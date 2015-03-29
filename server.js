var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	config = require('./config.js'),
	path = require('path'),
	multer = require('multer');

//connect to mongoDB
mongoose.connect(config.database);

app.set('view engine', 'jade');
app.set('views', path.join(__dirname + '/app/views'));
app.use(multer(config.multerConfig));

//routes for the app
var appRouter = require('./app/routes/routes.js');
app.use(appRouter(app, express));

app.listen(config.port);