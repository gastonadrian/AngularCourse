(function(){
	'use strict';

	angular.module('redditTv',['directives','controllers'])
		.config(function($sceProvider) {
			$sceProvider.enabled(false);
		});

})()