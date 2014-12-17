/**
*Instantiate our angular modules
*/
var app = angular.module('tsv3', ['ngRoute']);


/**
* Login Controller
*/
app.controller('LoginController', function($scope){
	
});

/**
* Homepage Controller
*/
app.controller('HomeController', function($scope){
	$scope.girls = [
		{"id" : 1, "name" : "isida", "title" : "Hhot"},
		{"id" : 2, "name" : "isida2", "title" : "Hhot2"}
	];
});