(function(){
	'use strict';

	angular.module('controllers',[])
		.controller('IndexCtrl', function($scope){		
           
           var oneDay = 86400,
            date = new Date(),
            unixtimeMs = date.getTime(),
            unixtime = parseInt(unixtimeMs / 1000),
            searchString = "search/.json?q=%28and+%28or+site%3A%27youtube.com%27+site%3A%27vimeo.com%27+site%3A%27youtu.be%27%29+timestamp%3A"+(unixtime - 5*oneDay)+"..%29&restrict_sr=on&sort=top&syntax=cloudsearch",
            uri = 'http://www.reddit.com/r/funny/' + searchString + '&limit=100';
		});
})();