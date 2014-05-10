(function(){
	'use strict';

	angular.module('redditTv',['controllers','directives'])
		.config(function($sceProvider) {
			$sceProvider.enabled(false);
		});

})()