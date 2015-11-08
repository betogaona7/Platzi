
var connect = require('connect')
var app = connect();

//Middlewar hola mundo
function HiWorld(req, res, next){
	res.setHeader('Content-Type','text/plain');
	res.end('Hola mundo');
}

//Middleware logger
function logger(req, res, next){
	console.log('#Backend pro %s %s', res.method, res.url);
	next();
}

//Simular entrada ala base de datos
function authWithDB(user, pass, callback){
	if(pass != '123'){
		return callback('Incorrect password');
	}
	callback();
}

//mnejar errores
function errorHandler(){
	//variable de entorno, development es variable predeterminada
	var env = process.env.NODE_ENV || 'Development';
	//Creamos el middleware que administra errores (es diferente al middleware normal)s
	//Conect detecta autmoaticamente si tiene 4 argumentos de ser asi
	//utiliza automaticamente la administracion de errores 
	return function(err, req, res, next){
		res.status_code = 500;
		switch(env){
			case 'Development':
			res.setHeader('Content-Type','application/json');
			res.end(JSON.stringify(err));
			break;
		default:
			res.end('Server error');
		}
	};
}


//Middleware de autorizacion
function restrict(req, res, next){
	var authorization = req.headers.authorization;

	//Si no vienen los emcabezados, no estamos autorizados
	if(!authorization){
		return next(new Error('Unauthorized'));
	}

	//Si si vienen los encabezados entonces lo desponemos en dos
	var parts = authorization.split(' ');
	//Esquema de autontificacion
	var schema = parts[0];
	//El tipo de autenticacion
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	//Imaginar que vamos a confirmarlo a una base de datos
	authWithDB(user, pass, function(err){
		//si no existe 
		if(err){
			return next(err);
		}
		next();
	});
}

//Middleware de panel de administracion

//http://localhost:3000/admin
//http://localhost:3000/admin/users

function admin(req, res, next){
	switch(req.url){
		case '/':
			res.end('try /users');
			break;
		case '/users':
		res.setHeader('Content-Type','application/json');
		res.end(JSON.stringify(['Freddy', 'Leonidas', 'Camilo', 'Alberto']));
		break;

	}
}


app
	.use(logger)
	.use('/admin',restrict) //este middleware solo funciona en la ruta /admin
	.use('/admin',admin)
	.use(HiWorld)
	.use(errorHandler) //El administrador de errores siempre debe ser el ultimo
	.listen(3000);

//curl --user alberto:back http://localhost:3000/admin
//NODE_ENV=production nodejs authenticate.js