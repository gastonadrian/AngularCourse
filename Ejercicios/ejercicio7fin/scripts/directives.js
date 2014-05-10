(function(){
	'use strict';

	angular.module('directives',[])
            .directive('ejercicioSeis', [
                function(){
                    var definition = {
                        restrict:'A',
                        replace:true,
                        template:'<p>Es el sexto ejercicio</p>',
                        link:function(scope, element, attrs){
                            element.appendTo('body');
                        }
                    };

                    return definition;
                }
            ]);
})();