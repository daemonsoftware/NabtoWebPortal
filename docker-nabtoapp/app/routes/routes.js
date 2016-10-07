/* This script will take care of the requests based upon the URL Pattern for example '/verify' and '/products'
 *Modules dependencies
	* Express Module: Express MVC framework
	* router Module: It decide how application responds to client request
	* requestify: Simplifies node HTTP request making
*/
var express = require('express')
	,router = express.Router()
	,requestify = require('requestify')
;

// Serves the request having URL pattern as /products to get product details
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

// Serves the request having URL pattern as /verify
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

		db.getAccount(body.email, function(err, data){
			if (err) {
				console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));

				res.json({
					success: false
					,message: err.message
				});

			} else {
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
					}, function(err, data) {
						if (err) {
							console.error("Unable to add item. Error JSON:", err);
							res.json({
								success: false
								,message: err
							})
						} else {
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

// Exposes router module
module.exports = router;
