(function(){

'use strict'

angular.module('MenuSize',[])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

	$scope.TextInput="";
	$scope.Mensaje="";
	$scope.Estilo="";
	$scope.EstiloTB="";
	$scope.Comidas;


	function CuentePlatos(){

		var IsEmpty = true;
		var ValidPlates = 0;
		var Resultado = [true,0];

		$scope.Comidas = $scope.TextInput.split([',']);

		console.log("Scope Comidas: ");
		console.log($scope.Comidas);


		for(var i=0;i<$scope.Comidas.length;i++){


			if($scope.Comidas[i].trim()!=""){

				IsEmpty = false;
				ValidPlates++;
			}

		}

		Resultado[0]=IsEmpty;
		Resultado[1]=ValidPlates;


		console.log("Resultado es: ");
		console.log(Resultado);
		
		return Resultado;



	}

	


	$scope.VerifyPlates = function (){

		var NumeroPlatos = 0;
		var IsEmpty = true;
		var Resultados = [true,0];

		Resultados = CuentePlatos();

		NumeroPlatos = Resultados[1];
		IsEmpty = Resultados[0];
		


		if(NumeroPlatos>3){

			$scope.Mensaje= "Too Much, man!. Don't think about it";
			$scope.Estilo= "style=\"color:'green'\"";
			$scope.EstiloTB= "style=\"border:'green'\"";

		}

		else{

			$scope.Mensaje= "Bring it on, pal. Enjoy!";
			$scope.Estilo= "style=\"color:'green'\"";
			$scope.EstiloTB= "style=\"border:'green'\"";

		}

		if(IsEmpty){

			$scope.Mensaje= "Please enter data first";
			$scope.Estilo= "style=\"color:'red'\"";
			$scope.EstiloTB= "style=\"border:'red'\"";

		}

		return $scope.Mensaje;

	}
	


}

})();