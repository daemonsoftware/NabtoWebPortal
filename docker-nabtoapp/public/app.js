/**
   
   * @name nabtoApp {module}
   * @param nabtoApp , name of ng-app directive
   * @param ui.router {service} handles routing between navigation menus
   * @description  Creats an instance for angular module
*/

var nabtoApp = angular.module('nabtoApp', ['ui.router']);

/**
   
   * @name config
   * @memberof nabtoApp
   * @param stateProvider {service} router provider
   * @param urlRouteProvider {service} handles default view
   * @description  providing url for each state and assigning their corresponding controller
*/

nabtoApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	/**
   
   * @name verify
   * @memberof stateProvider
   * @param  url, path to specific view file
   * @param  controller, specifies the controller attached with the path 
   */
	
	.state('verify', {
		url: '/verify*path'
		// url: '/verify/?access_token'
		,controller: 'verifyController'
	})
/**
   
   * @name home
   * @memberof stateProvider
   * @param  url, path to specific view file
   * @param  controller, specifies the controller attached with the path 
   */
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

 /**
   
   * @name verifyController {controller} 
   * @memeberof nabtoApp module
   * @param $scope {service} controller scope
   * @param $state {service} provides navigation to a view
   * @param $stateParams {service} access param in url
   * @param $http{service} facilitates communication with the remote HTTP servers 
   * @description  verifyController extracts access token from url and
   * pass it to http.post() and if it is a sucess response it will redirect to home else it throws error message
   */
nabtoApp.controller('verifyController', function($scope, $state, $stateParams, $http) {
	var access_token = $stateParams.path.split('access_token')[1].split('=')[1];
	// C('access_token', access_token);

	$('#loading').show();
/**
   
   * @name $http.post{request method}
   * @memeberof verifyController 
   * @param access_token
   
   */
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
			alert('Error - ' + resp.data.message);
		}
	})
	.catch(function(err){
		$('#loading').hide();
		C('err', err);
	})
});

/**
   
   * @name productsController {controller}
   * @memeberof nabtoApp
   * @param $scope {service} controller scope
   * @param $http{service} facilitates communication with the remote HTTP servers 
   * @description productsController will pass email as param in http.get() and will return  product details based on email passed
   */
nabtoApp.controller('productsController', function($scope, $http) {
	// debugger;
	
/**
   
   * @name products {array}
   * @memeberof nabtoApp
   * @description used to create na array for products
   
   */	
	
	
	$scope.products = [];
	
/**
   
   * @name loading {method}
   * @memeberof productsController
   * @description used to display the loasding image
   
   */	
	$('#loading').show();
/**
   
   * @name $http.get{request method} 
   * @memeberof productsController
   * @param access_token
   
   */
	
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
