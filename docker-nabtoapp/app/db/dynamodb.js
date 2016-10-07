
//this file is responsible for creating account and getting user deatils  for user in dynamodb after signin/sign up  with dailycred

var usersTable = 'accounts';

function DynamoDB(dynamodb) {
	this.dynamodb = dynamodb;
};
//function used to get user related information from dynamodb by using email as key
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
//function used to create user related information in dynamodb 
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
// returned as the result of a require call.
module.exports = DynamoDB;
