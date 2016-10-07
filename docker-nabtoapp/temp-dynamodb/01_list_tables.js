/* This script is for fetching list of tables in local DynamoDB
*/
var AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB({
	/* Credential issue Start
			* changed by: Pranab
		*/
	accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"
	, secretAccessKey: "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"
	// Credential issue End 
	, region: 'us-west-2'
	, endpoint: "http://localhost:8050"
});

var params = {
	// ExclusiveStartTableName: 'STRING_VALUE'
	// ,
	Limit: 100
};
dynamodb.listTables(params, function (err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else
		console.log(data); // successful response
});