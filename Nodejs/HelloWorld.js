
//Display Hello World, first option
//Crear un servidor HTTP en el puerto 3000

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hellow world, this a course of backend\n');
}).listen(3000,'127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
//-----------------------------------------------------------

//Display Hello World, second option
//Cremos un hilo de datos abriendo un archivo y guardandolo

var fs = require('fs');
var stream = fs.createReadStream('~/assets/events.json');

stream.setEncoding('utf8');

stream.on('data', function(chunk){
	console.log(chunk);
});

stream.on('end', function(){
	console.log('Finished');
});
//-----------------------------------------------------------

//Display Hello World, third option
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'image/png'});
	fs.createReadStream('../assets/image.png').pipe(res);
}).listen(3000);

console.log('Server running at http://localhost:3000');