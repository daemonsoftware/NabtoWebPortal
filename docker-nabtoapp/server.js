//This file is repsonsible for triggering the index.html and passing request, response between DB and html pages

// load dependencies before running the code provided.

var express = require('express')
	,logger = require('morgan')
	,bodyParser = require('body-parser')
	,AWS = require("aws-sdk")
;


// load dependencies before running the code provided.
require('./app/globals');


// load dependencies before running the code provided.
var routes = require('./app/routes/routes.js')
	,DynamoDB = require('./app/db/dynamodb.js')
;

 
//Creating an instance for express application
var app = express();

/* Each layer is essentially adding a function that specifically
 handles something to your flow through the middleware by using app.use(). */

app.use(logger('dev'));

/* By adding bodyParser, you're ensuring your server handles incoming requests through the express middleware.
 So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests */

 
//parses middleware that only parses json.  
app.use(bodyParser.json());

//parses middleware that only parses urlencoded bodies
app.use(bodyParser.urlencoded({extended: true}));

//The static middleware handles serving up the content from a directory public
app.use(express.static(__dirname + '/public'));


// server dependencies
function Server(){
	var dynamoDbOptions = {
		accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"									// Credential issue --changed by Pranab
		,secretAccessKey: "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" 		// Credential issue --changed by Pranab
		,region: "us-west-2"
		,endpoint: "http://localhost:8050"
	}

	//instantating aws
	
	var dynamodb = new AWS.DynamoDB.DocumentClient(dynamoDbOptions);
	
	//creating local object for DB
	this.db = new DynamoDB(dynamodb);

	var self = this;
	
	//invoking middlewares
	app.use(function(req,res,next) {
	    res.locals.db = self.db;
		next();
	});

	//invoking middlewares
	app.use('/v1', routes);
	
	//routing with token to and fro with dailycred and index.html
	app.get('/', function(req, res){
		res.send('index.html');
	});

	//redirecting to port 3000 after getting the access token 
	this.server = app.listen(3000, function () {
		C('Example app listening on port 3000');
	});

}


Server.prototype.setDatabase = function(db) {
  this.db = db;
};

Server.prototype.getDatabase = function() {
  return this.db;
};

Server.prototype.getServer = function() {
  return this.server;
};

module.exports = new Server();