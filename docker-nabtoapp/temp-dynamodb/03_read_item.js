/* This script is for fetching Item from 'accounts' table using 'email'
*/
var AWS = require("aws-sdk");

AWS.config.update({
	/* Credential issue Start
		* changed by: Pranab
	*/
	accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"
	, secretAccessKey: "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"
	// Credential issue End
	,region: "us-west-2"
	,endpoint: "http://localhost:8050"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var params = {
	TableName: 'accounts'
	// TableName: 'products'
	,Key:{
		"email": 'thunderbong@bobmail.info'
	}
};

docClient.get(params, function(err, data) {
	if (err) {
		console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
	} else {
		console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
	}
});