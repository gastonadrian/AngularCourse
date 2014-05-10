(function(){
	'use strict';

	angular.module('directives',[])
      .directive('videoThumbnail', [
                '$parse',
                function($parse){
                    var definition = {
                        restrict:'A',
                        replace:true,
                        template: '<div class="col-sm-6 col-md-4">' +
                                    '<div class="thumbnail">' +
                                        '<img ng-src="{{video.thumbnail}}" class="img-responsive">' +
                                        '<div class="caption">' +
                                          '<h3>{{video.title}}</h3>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>',
                        link:function(scope, element, attrs){

                            scope.$watch(attrs.controllerVideo, function(){
                                scope.video = $parse(attrs.controllerVideo)(scope);
                            });
                        }
                    };

                    return definition;
                }
            ]);
})();