//responsible for creating items using AWS

//including dependencies and creating instance
var AWS = require('aws-sdk');

//configuring AWS
AWS.config.update({
	accessKeyId: "AKIAI5G5ZISWUAJZWAVQ"									// Credential issue --changed by Pranab
	,secretAccessKey: "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"		// Credential issue --changed by Pranab
	,region: 'us-west-2'
	,endpoint: 'http://localhost:8050'
});


//creating instance for AWS.DynamoDB.DocumentClient()
var docClient = new AWS.DynamoDB.DocumentClient();

var allAccounts = [
	{
	// 	 id: '142b45c2-c8d7-4c70-b85e-db5bfd3649g1'
	// 	,picture: 'https://www.dailycred.com/user/pic?user_id=142b45c2-c8d7-4c70-b85e-db5bfd3649f2&size=50'
	// 	,email: 'thunderbong@mailinator.com'
	// 	,created: 1472168639542
	// 	,verified: false
	// 	,display: 'thunderbong@mailinator.com'
	// 	,access_token: '8276d898-59c4-4988-9fa6-716229820204'
	// 	,products: [{
	// 		 name: 'Value Line'
	// 		,domain: 'http://value.nabto.com'
	// 		,tier: 'Plus'
	// 	}]
	// }
	// ,{
		 id: '142b45c2-c8d7-4c70-b85e-db5bfd3649f2'
		,picture: 'https://www.dailycred.com/user/pic?user_id=142b45c2-c8d7-4c70-b85e-db5bfd3649f2&size=50'
		,email: 'thunderbong@bobmail.info'
		,created: 1472168639523
		,verified: true
		,display: 'thunderbong@bobmail.info'
		,access_token: '8276d898-59c4-4988-9fa6-716229820232'
		,products: [{
			 name: 'Value Line'
			,domain: 'http://value.nabto.com'
			,tier: 'Plus'
		}
		,{
			 name: 'Sassy Gold'
			,domain: 'http://gold.nabto.com'
			,tier: 'Plus'
		}
		,{
			 name: 'Premium'
			,domain: 'http://premium.nabto.com'
			,tier: 'Plus'
		}
		,{
			 name: 'Development'
			,domain: 'http://nabto-dev.appmyproduct.com'
			,tier: 'Plus'
		}]
	}
];


allAccounts.forEach(function(user) {
	var params = {
		TableName: 'accounts',
		Item: user
	};

	
	//adding user in to the accounts table 
	docClient.put(params, function(err, data) {
		if (err) {
			console.error("Unable to add user", user.email, ". Error JSON:", JSON.stringify(err, null, 2));// an error occurred
		} else {
			console.log("PutItem succeeded:", user.email); // successful response
		}
	});
});









// var allProducts = [
// 	{
// 		'email': 'thunderbong@mailinator.com'
// 		,'name': 'Value Line'
// 		,'domain': 'http://value.nabto.com'
// 		,'tier': 'Plus'
// 	}
// 	,{
// 		'email': 'thunderbong@bobmail.info'
// 		,'name': 'Value Line'
// 		,'domain': 'http://value.nabto.com'
// 		,'tier': 'Plus'
// 	}
// 	,{
// 		'email': 'thunderbong@bobmail.info'
// 		,'name': 'Sassy Gold'
// 		,'domain': 'http://gold.nabto.com'
// 		,'tier': 'Plus'
// 	}
// 	,{
// 		'email': 'thunderbong@bobmail.info'
// 		,'name': 'Premium'
// 		,'domain': 'http://premium.nabto.com'
// 		,'tier': 'Plus'
// 	}
// 	,{
// 		'email': 'thunderbong@bobmail.info'
// 		,'name': 'Development'
// 		,'domain': 'http://nabto-dev.appmyproduct.com'
// 		,'tier': 'Plus'
// 	}
// ];

// allProducts.forEach(function(product) {
// 	var params = {
// 		TableName: 'products',
// 		Item: product
// 	};

// 	docClient.put(params, function(err, data) {
// 		if (err) {
// 			console.error("Unable to add product", product.email, ". Error JSON:", JSON.stringify(err, null, 2));
// 		} else {
// 			console.log("PutItem succeeded:", product.email);
// 		}
// 	});
// });