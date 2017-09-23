(function(){

'use strict'

angular.module('MenuSize',[])

.controller('Controlador', function($scope){

	$scope.TextInput="";
	$scope.Mensaje="";


	function CuentePlatos(){

		var Comidas;

		Comidas = $scope.TextInput.split([',']);

		console.log(Comidas);

		return Comidas.length;



	}

	


	$scope.VerifyPlates = function (){

		var NumeroPlatos = 0;

		NumeroPlatos = CuentePlatos();


		if(NumeroPlatos>3){

			$scope.Mensaje= "Too Much, man!" <br> "Don't think about it";

		}

		else{

			$scope.Mensaje= "Bring it on, pal. Enjoy!";

		}

		return $scope.Mensaje;

	}
	







});

})();