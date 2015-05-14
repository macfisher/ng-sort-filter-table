// app.js

var sortApp = angular.module('sortApp', []);

sortApp.controller('mainController', ['$scope', function($scope) {
	
	// set default sort type
	$scope.sortType = 'name';
	
	// set default sort order
	$scope.sortReverse = false;
	
	// set default search/filter term
	$scope.searchWeapon = '';
	
	// create the list of player classes
	$scope.playerClass = [
		{ 
			name: 'Thug', 
			weapon: 'Shotgun', 
			damage: 10 
		},
		{ 
			name: 'Assassin', 
			weapon: 'Pistol', 
			damage: 3 
		},
		{ 
			name: 'Spy', 
			weapon: 'Knife', 
			damage: 8 
		},
		{ 
			name: 'Chemist', 
			weapon: 'Poison', 
			damage: 7 
		},
		
	];
}]);
