(function(){

'use strict'

angular.module('MenuSize',[])

.controller('Controlador', function($scope){

	$scope.TextInput="";
	$scope.Mensaje="";
	$scope.Comidas;


	function CuentePlatos(){

		var IsEmpty = true;
		var PlatoValido = 0;
		var Resultado;

		$scope.Comidas = $scope.TextInput.split([',']);

		console.log($scope.Comidas);


		for(var i=0;i<$scope.Comidas.length;i++){



			if($scope.Comidas[i].trim()!=""){

				IsEmpty = false;
				ValidPlates++;
			}

		}

		Resultado[0]=IsEmpty;
		Resultado[0]=ValidPlates;
		
		return Resultado;



	}

	


	$scope.VerifyPlates = function (){

		var NumeroPlatos = 0;
		var IsEmpty = true;

		Resultados = CuentePlatos();

		NumeroPlatos = Resultados[1];
		IsEmpty = Resultados[0];
		


		if(NumeroPlatos>3){

			$scope.Mensaje= "Too Much, man!. Don't think about it";

		}

		else{

			$scope.Mensaje= "Bring it on, pal. Enjoy!";

		}

		if(IsEmpty){

			$scope.Mensaje= "Please enter data first";

		}

		return $scope.Mensaje;

	}
	







});

})();