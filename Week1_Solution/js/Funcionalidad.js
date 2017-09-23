(function(){

'use strict'

angular.module('MenuSize',[])

.controller('Controlador', function($scope){

	$scope.TextInput="";
	$scope.Mensaje="";


	function CuentePlatos(){

		var Comidas = array();

		Comidas = TextInput.split([','])

		return Comidas.length;



	}

	


	function VerifyPlates(NumeroPlatos){

		var NumeroPlatos = 0;

		NumeroPlatos = CuentePlatos();


		if(NumeroPlatos>3){

			$scope.Mensaje= "Too Much, man!";

		}

		else{

			$scope.Mensaje= "Bring it on, pal. Enjoy!";

		}

	}
	







});

})();