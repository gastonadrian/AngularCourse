(function(){
	'use strict';

	angular.module('redditTv',['controllers'])
		.config(function($sceProvider) {
			$sceProvider.enabled(false);
		});

})()