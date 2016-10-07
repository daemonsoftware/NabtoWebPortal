//angular code for routing between pages nad their function goes here

//creating instance for angular module
var nabtoApp = angular.module('nabtoApp', ['ui.router']);

//creating routes with corresponding url and its controller
nabtoApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('verify', {
		url: '/verify*path'
		// url: '/verify/?access_token'
		,controller: 'verifyController'
	})

	.state('home', {
		url: '/home'

		,views: {
			'': {
				templateUrl: './app/partial-account-details.html'
				,controller: 'productsController'
			}
		}
	});
});

//controller for extracting access token and redirecting to home page
nabtoApp.controller('verifyController', function($scope, $state, $stateParams, $http) {
	var access_token = $stateParams.path.split('access_token')[1].split('=')[1];//extracting access token
	// C('access_token', access_token);

	$('#loading').show();

	$http.post('/v1/verify', {access_token: access_token})
	.then(function(resp){
		$('#loading').hide();

		// C('resp.data', resp.data);
		if (resp.data.success){//success response
			localStorage.setItem('email', resp.data.values.email);
			// alert('Welcome - ' + resp.data.values.email);

			// C('success', resp.data.values);
			$state.go('home');//redirecting to home on finding coreesponding email
		}
		else {
			alert('Error - ' + resp.data.message);//error response
		}
	})
	.catch(function(err){
		$('#loading').hide();
		C('err', err);
	})
});

//ajax call for loading product details according to signed in email is done here
nabtoApp.controller('productsController', function($scope, $http) {
	// debugger;
	$scope.products = [];
	$('#loading').show();

	$http.get('/v1/products'
	,{
		params: {
			email: localStorage.getItem('email')// params passed on ajax call
		}
	})
	.then(function(resp){
		$('#loading').hide();

		if (resp.data.success){
			$scope.products = resp.data.values;//success response 
		}
		else {
			C('Error', resp.data.message);
			alert('Error - ' + resp.data.message);//error response
		}
	})
	.catch(function(err){
		$('#loading').hide();

		C('err', err);
		alert('Error - ' + err.message);//error response
	})

});