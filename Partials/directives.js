angular.module('directives',[])
	 .directive('bootstrapModal', [
                function () {
                    var definitionObject = {
                        restrict: 'A',
                        replace: false,
                        transclude: true,
                        scope: {
                            modalTitle: '@',
                            modalContentType: '@',
                            confirmationButton: '@',
                            cancelButton: '@',
                            showModal: '=',
                            modalContentUrl: '=',
                            closeCallback: '&',
                            confirmationCallback: '&'
                        },
                        templateUrl: '/Views/Directives/bootstrapModal.html',
                        link: function (scope, element) {

                            var modal = element.find('.modal'),
                                modalBody = modal.find('.modal-body');

                            modal.appendTo('body');
                            element.find('.modal-backdrop').appendTo('body');

                            // only set the watcher if the content type is iframe
                            if (scope.modalContentType === 'iframe') {
                                scope.$watch('showModal', function (newValue, oldValue) {
                                    // if we have to show the modal, then create the content
                                    if (newValue) {
                                        // first clean up of the old content
                                        modalBody.empty();
                                        var iframe = $('<iframe class="col-md-11" height="400" frameborder="0" border="0" src="' + scope.modalContentUrl + '"></iframe>');
                                        modalBody.html(iframe);
                                    }
                                });
                            }

                            scope.confirm = function () {
                                if (angular.isFunction(scope.confirmationCallback)) {
                                    scope.confirmationCallback();
                                }
                            };

                            scope.cancel = function () {
                                scope.showModal = false;

                                if (angular.isFunction(scope.closeCallback)) {
                                    scope.closeCallback();
                                }
                            };
                        }
                    };
                    return definitionObject;
                }]);