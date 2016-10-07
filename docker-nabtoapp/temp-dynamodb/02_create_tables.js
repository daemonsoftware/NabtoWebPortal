/* This script is for creating 'accounts' table inlocal DynamoDB
*/
var AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB({
	/* Credential issue Start
		* changed by: Pranab
	*/
	accessKeyId: "Put your accessKeyId"									
	, secretAccessKey: "Put your secretAccessKey"
	// Credential issue End 
	, region: 'us-west-2'
	, endpoint: "http://localhost:8050"
});

function deleteTable() {
	var params = {
		TableName: "accounts"
		// TableName : "products"
	};

	dynamodb.deleteTable(params, function (err, data) {
		if (err) {
			console.error("Unable to delete table. Error JSON:", err); // JSON.stringify(err, null, 2));
		} else {
			console.log("Deleted table. Table description JSON:", data.TableDescription.TableName); // JSON.stringify(data, null, 2));
		}
	});
}


function createAccountsTable() {
	var params = {
		TableName: "accounts"
		, KeySchema: [
			{ AttributeName: "email", KeyType: "HASH" }  //Partition key
			// ,{ AttributeName: "access_token", KeyType: "RANGE" }  //Sort key
		]
		, AttributeDefinitions: [
			{ AttributeName: "email", AttributeType: "S" }
			// ,{ AttributeName: "access_token", AttributeType: "S" }
			// ,{ AttributeName: "display", AttributeType: "S" }
			// ,{ AttributeName: "picture", AttributeType: "S" }
			// ,{ AttributeName: "created", AttributeType: "S" }
			// ,{ AttributeName: "verified", AttributeType: "B" }
		]
		, ProvisionedThroughput: {
			ReadCapacityUnits: 10
			, WriteCapacityUnits: 10
		}
	};

	dynamodb.createTable(params, function (err, data) {
		if (err) {
			// console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
			console.error("Unable to create table. Error JSON:", err);
		} else {
			// console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
			console.log("Created table. Table description JSON:", data.TableDescription.TableName);
		}
	});
}

// function createProductsTable(){
// 	var params = {
// 		TableName : "products"
// 		,KeySchema: [
// 			{ AttributeName: "email", KeyType: "HASH"}  //Partition key
// 			// ,{ AttributeName: "name", KeyType: "RANGE" }  //Sort key
// 			// ,{ AttributeName: "domain", KeyType: "RANGE" }  //Sort key
// 		]
// 		,AttributeDefinitions: [
// 			{ AttributeName: "email", AttributeType: "S" }
// 			// ,{ AttributeName: "name", AttributeType: "S" }
// 			// ,{ AttributeName: "domain", AttributeType: "S" }
// 			// ,{ AttributeName: "tier", AttributeType: "S" }
// 		]
// 		,ProvisionedThroughput: {
// 			ReadCapacityUnits: 10
// 			,WriteCapacityUnits: 10
// 		}
// 	};

// 	dynamodb.createTable(params, function(err, data) {
// 		if (err) {
// 			// console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
// 			console.error("Unable to create table. Error JSON:", err);
// 		} else {
// 			// console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
// 			console.log("Created table. Table description JSON:", data.TableDescription.TableName);
// 		}
// 	});
// }

// deleteTable();
createAccountsTable();
// createProductsTable();