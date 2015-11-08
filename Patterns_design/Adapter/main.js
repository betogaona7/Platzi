

//Antiguo, el proceso que ya existia 
function Adaptee(){
	//Solicita informacion 
	this.request = function(origen, destino, peso){
		//hacemos referencia a atributos
		this.origen = origen;
		this.destino = destino;
		this.peso = peso;

		this.total = Math.round(Math.random()*12345);
		return this.total;
	}
}

//Nuevo, el proceso nuevo, tiene caracteristicas diferentes
function Target(){
	this.login = function(credenciales){
		// TODO
	};
	this.set_origen = function(origen){
		//this.origen = origen;
	};
	this.set_destino = function(destino){
		//this.destino = destino;
	};
	this.calculate = function(peso){
		//this.peso = peso;
		total = Math.round(Math.random()*54321);
		return total;
	};
}

//Se usa para utilizar el proceso nuevo 
function Adapter(credenciales){
	//seran utilizadas para el target 
	var target = new Target();
	target.login();

	return{
		//Wrapper, usamos la version anterior como funcion que nos devuelva
		//el calculo de la informaacion, conservando la firma anterior utilizando
		//el nuevo
		request: function(origen, destino, peso){
			target.set_origen(origen);
			target.set_destino(destino);
			return target.calculate(peso);
		}
	}
}


//para poder comunicar con un cliente, queremos pasar de antigua a nueva
function Client(){
	this.run = function(){
		//Referencia al procedimiento anterior, solo como ilustacion
		var old_interface = new Adaptee();
		var costo = old_interface.request("1234","321",12.45);
		print(costo);

		var credents = "user/pass";
		var adapter = new Adapter(credents);
		//utilizamos el nuevo, de la misma manera que el viejo
		var new_cost = adapter.request("1234","321",12.45);
		print(new_cost);
	}
}


cliente = new Client();
cliente.run();