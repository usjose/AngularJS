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

			$scope.Mensaje= "Too Much, man!. Don't think about it";

		}

		else if(NumeroPlatos=0){

			$scope.Mensaje= "Please enter data first";

		}

		else{

			$scope.Mensaje= "Bring it on, pal. Enjoy!";

		}

		return $scope.Mensaje;

	}
	







});

})();