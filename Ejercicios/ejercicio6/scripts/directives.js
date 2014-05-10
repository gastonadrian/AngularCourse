(function(){
	'use strict';

	angular.module('directives',[])
            .directive('test', [
                function(){
                    var definition = {
                        restrict:'AEC',
                        replace:true,
                        template:'<p>test</p>',
                        link:function(scope, element, attrs){

                        }
                    };

                    return definition;
                }
            ]);
})();