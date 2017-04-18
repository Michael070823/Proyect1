angular
		.module('apiApp', []) //Llamado a Angular
		.controller('apiAppCtrl', ['$http', controladorPrincipal]); //Controlador
	function controladorPrincipal($http){
		var vm=this;
		vm.buscaEnRegion = function(){
			$http.get(vm.url).success(function(respuesta){ //Se obtiene por metodo GET la URI del JSON seleccionado
				vm.paises = respuesta; //Se despliega resultado
		});
	};
}

var miImage = document.querySelector('img');

miImage.onclick = function(){
	var miSrc = miImage.getAttribute('src');
	if(miSrc === 'img/FRA.jpg'){
		miImage.setAttribute ('src', 'img/COL.jpg');
	}else{
		miImage.setAttribute ('src', 'img/FRA.jpg');
	}
}

var ruta = document.querySelector('img/');