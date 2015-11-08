
function main(){

	var director = new director_class();
	var make_car = new car_builder();
	//En teoria devuelve un objeto carro 
	var car = director.construct(make_car);
	car.doSometing();
}


function director_class(){
	this.construct = function(builder){
		//Identifica cuales son los pasos para armar al objeto
		builder.step_1();
		builder.step_2();
		return builder.result();
	}
}


//Contiene el proceso para construir el objeto
function car_builder(){
	//objeto que queremos devolver
	this.car = null;
	//Pasos para crearlo
	this.step_1 = function(){
		this.car = new Car();
	}
	this.step_2 = function(){
		this.car.add_parts();
	}
	//Devolvemos el objeto que construimos
	this.result = function(){
		return this.car;
	}
}

//Permite crear el producto
function Car(){
	this.doors = 0;
	//agregamos las partes del carro
	this.add_parts = function(){
		this.doors = 4;
	}
	this.doSometing = function(){
		print("Este carro tiene " + this.doors + " puertas");
	}
}

main();