
//Servicio web que inicie nuestra aplicacion
// con este servicio le decimos  node que al recibir el request
// en la URL raiz devuelva un hola mundo.


//Decimos a nuestro server que librerias Node vamos a cargar
var express = require('express');
var server = express();

//Le decimos al server que hacer cuando recibe una peticion en el root
server.get('/', function(req, res){
	//hace un response con la cadena hola munda
	res.send('Hello World,the aplication is already running');
});

//le decimos al servidor el puerto en el que debe escuchar peticiones
server.listen(3000);
console.log('The aplication is running in http://localhost:3000');
