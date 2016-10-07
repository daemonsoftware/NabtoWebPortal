//this file is handling create account nad sign in using dailycred

//including dependencies
var express = require('express')
	,router = express.Router()
	,requestify = require('requestify')
;

//app.use gets its req res for product routing is done here
router.get('/products', function(req, res){
	var db = res.locals.db;

	db.getAccount(req.query.email, function(err, data){
		if (err) {
			console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
			res.json({
				success: false
				,message: err.message
			})
		} else {
			res.json({
				success: true
				,values: data.Item.products
			});
		}
	});
});


//app.get for accessing access token  is done here
router.post('/verify', function(req, res){
	var db = res.locals.db;

	requestify.request('https://www.dailycred.com/graph/me.json', {
		method: 'post'
		,params: {
			access_token: req.body.access_token
		}
	})
	.then(function(response){
		var body = response.getBody();

/* after sign in ,this function get the details of the logged in user if it is found ,then it will repond with "Getitem succeeded"
otherwise it will create  a account  */

		db.getAccount(body.email, function(err, data){
			if (err) {
				console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));

				res.json({
					success: false
					,message: err.message
				});

			} 
			//sucessful fetching  is done using the below code
			else {
				console.log("GetItem succeeded:", JSON.stringify(data, null, 2));

				if (data.Item){
					res.json({
						success: true
						,values: {
							 id: data.Item.id
							,email: data.Item.email
							,display: data.Item.display
							,picture: data.Item.picture
						}
					});
				}
				//create account code goes here
				else {
					db.createAccount({
						 id: body.id
						,picture: body.picture
						,email: body.email
						,created: body.created
						,verified: body.verified
						,display: body.display
						,access_token: body.access_token
						,products: []
					}, function(err, data) { //error on adding is returned using the below code
						if (err) {
							console.error("Unable to add item. Error JSON:", err);
							res.json({
								success: false
								,message: err
							})
						} else {
							//sucessfully added is returned using the below code
							console.log("Added item:", JSON.stringify(data, null, 2));
							res.json({
								success: true
								,values: {
									 id: data.Item.id
									,email: data.Item.email
									,display: data.Item.display
									,picture: data.Item.picture
								}
							});
						}
					});
				}
			}
		});
	})
	.catch(function(err){
		C(__line, err);
		res.json({
			success: false
			,message: err
		})
	})

});

// returned as the result of a require call.
module.exports = router;
