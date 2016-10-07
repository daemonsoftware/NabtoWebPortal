/* This script is use to create of fetch Items from 'accounts' table 
*/
var usersTable = 'accounts';

function DynamoDB(dynamodb) {
	this.dynamodb = dynamodb;
};

// getAccount function is used to fetch Item from 'accounts' table
DynamoDB.prototype.getAccount = function(email, done) {
	// C(__line, email);

	this.dynamodb.get({
		TableName: 'accounts'
		,Key:{
			"email": email
		}
	}, function(err, data) {
		if (err) {
			return done(err, null);
		} else {
			return done(null, data);
		}
	});
};

// getAccount function is used to create new Item in 'accounts' table
DynamoDB.prototype.createAccount = function(data, done) {
	this.dynamodb.put({
		TableName: 'accounts'
		,Item:{
			 id: data.id
			,picture: data.picture
			,email: data.email
			,created: data.created
			,verified: data.verified
			,display: data.display
			,access_token: data.access_token
			,products: []
		}
	}, function(err, data) {
		if (err) {
			return done(err, null);
		} else {
			return done(null, data);
		}
	});
};

module.exports = DynamoDB;
