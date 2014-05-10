(function(){
	'use strict';

	angular.module('controllers',[])
		.controller('IndexCtrl', function($scope){		
            $scope.videoUrl = 'http://www.w3schools.com/html/movie.ogg';
		});
})()