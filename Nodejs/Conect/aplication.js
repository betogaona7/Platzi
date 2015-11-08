
//definimos un middleware 

// REQ - solicitud del servidor 
// RES - Instancia del objeto de respuesta, para enviar informacion 
//       a nuestro cliente
// NEXT- funcion que nos permite decirle a la aplicacion que este
//        middleware a termminado de operar y puede continuar con 
//        lo que sigue
function logger(req, res, next){
	//respondemos algo al navegador
	//una vez hecho esto no podemos cambiar el encabezado 
	res.setHeader('Content-Type','text/plain');
	res.end('Hello world');

	//comprobamos que funcione
	//console.log("#Backend pro %s %s", req.method, req.url );
	//next();
}

function logger2(req, res, next){
	console.log("#BackendPro %s %s \n", req.method, req.url);
	next();
}


var connect = require('connect');
var app = connect();

//le decimos al servidor que escuche el puerto 3000
// Adjuntamos nuestro middleware, importa mucho el orden, debido a los NEXT
app
	.use(logger2)
	.use(logger)
	.listen(3000);