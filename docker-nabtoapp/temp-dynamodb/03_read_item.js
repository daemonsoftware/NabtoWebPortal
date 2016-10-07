//responsible for reading items using AWS

//including dependencies and creating instance

var AWS = require("aws-sdk");

//configuring AWS
AWS.config.update({
	accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"									// Credential issue --changed by Pranab
	,secretAccessKey: "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"		// Credential issue --changed by Pranab
	,region: "us-west-2"
	,endpoint: "http://localhost:8050"
});

//creating instance for AWS.DynamoDB.DocumentClient()
var docClient = new AWS.DynamoDB.DocumentClient()


var params = {
	TableName: 'accounts'
	// TableName: 'products'
	,Key:{
		"email": 'thunderbong@bobmail.info'
	}
};

// getting item from the accounts table

docClient.get(params, function(err, data) {
	if (err) {
		console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));// an error occurred
	} else {
		console.log("GetItem succeeded:", JSON.stringify(data, null, 2)); // successful response
	}
});