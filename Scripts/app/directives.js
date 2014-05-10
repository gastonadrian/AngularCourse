(function(){
	'use strict';

	angular.module('directives',[])
		.directive('test', [
            function(){
                var definition = {
                    restrict:'C',
                    transclude:false,
                    replace:false,
                    scope:{},
                    template: false,
                    link: function(scope, element, attrs){
                        element.html('<span>test</span>');
                    }
                };

                return definition;
            }
        ]);
})()