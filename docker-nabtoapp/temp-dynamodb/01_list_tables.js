
//aws 
var AWS = require('aws-sdk');

//dynamo db configuration
var dynamodb = new AWS.DynamoDB({
	accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"									// Credential issue --changed by Pranab
	,secretAccessKey: "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"		// Credential issue --changed by Pranab
	,region: 'us-west-2'
	,endpoint: "http://localhost:8050"
});

var params = {
	// ExclusiveStartTableName: 'STRING_VALUE'
	// ,
	Limit: 100
};


dynamodb.listTables(params, function(err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else
		console.log(data); // successful response
});