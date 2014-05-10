(function(){
	'use strict';

	angular.module('controllers',[])
		.controller('IndexCtrl', function($scope){		
            $scope.productos = [
                {
                    Descripcion : 'Remera',
                    Precio: 50,
                    PrecioConImpuesto: 0 
                },
                {
                    Descripcion : 'Tablet',
                    Precio: 2000,
                    PrecioConImpuesto: 0   
                }
            ];

            $scope.tasa = 20;
		});
})();