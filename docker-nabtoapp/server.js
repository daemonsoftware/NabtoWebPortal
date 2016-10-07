/* This is the script to start the nodeJS application and it will serve on port number 3000 in localhost
*Modules dependencies
	* Express Module: Express MVC framework
	* Morgan Module: HTTP request logger middleware for node.js
	* body-parser Module: Parse incoming request bodies in a middleware
	* AWS SDK Module 
*/
var express = require('express')
	, logger = require('morgan')
	, bodyParser = require('body-parser')
	, AWS = require("aws-sdk")
	;

require('./app/globals');

// Creates router object and dynamodb object
var routes = require('./app/routes/routes.js')
	, DynamoDB = require('./app/db/dynamodb.js')
	;

// Express application Creation
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// It serves static files 
app.use(express.static(__dirname + '/public'));

function Server() {
	var dynamoDbOptions = {
		/* Credential issue Start
			* changed by: Pranab
		*/	
		accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"									
		, secretAccessKey: "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"
		// Credential issue End 		
		, region: "us-west-2"
		, endpoint: "http://localhost:8050"
	}

	// DyanamoDB object creation
	var dynamodb = new AWS.DynamoDB.DocumentClient(dynamoDbOptions);
	this.db = new DynamoDB(dynamodb);

	var self = this;
	app.use(function (req, res, next) {
		res.locals.db = self.db;
		next();
	});

	// Routes to url starting with '/v1' using script router.js 
	app.use('/v1', routes);

	// Get to index.html resides in public directory
	app.get('/', function (req, res) {
		res.send('index.html');
	});

	// application listens on port number 3000
	this.server = app.listen(3000, function () {
		C('Example app listening on port 3000');
	});

}

Server.prototype.setDatabase = function (db) {
	this.db = db;
};

Server.prototype.getDatabase = function () {
	return this.db;
};

Server.prototype.getServer = function () {
	return this.server;
};

module.exports = new Server();