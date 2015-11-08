
//Tiene la responsabilidad de crear una unica instancia
//Y devolverla cada vez que la necesitemos 

//equivelente a clusher
//funcion anonima 
//internamente permite crear la definicion del singleton

var singleton = (function(){
	//debe tener una forma de autollamarse
	var instance;

	//funcion que nos da la capacidad de construir el objeto que vamos a generar
	//debe devolver el objeto que estamos instanciando
	function init_instance(){

		//Metodo y variable privados
		function private_method(){
			print("I'am prived method");
		}

		//para este ejemplo lo usamos para verificar que siempre sera el mismo
		var private_number = Math.round(Math.random()*1000);
		
		return{
			//Metodos y variables publicas
			public_method: function(){
				private_method();
				print("The public can see me!");
			},

			public_properity: "I am also public",

			//nos devuelve el atributo privado para poder asegurar
			//que este es el mismo numero que generamos para las 
			//diferentes instancias
			get_random_number: function(){
				return private_number;
			}
		};
	};

	return {
		//devolver el emtodo con una instancia de mi mimso
		//que es la instancia que acabo de generar
		get_instance: function(){
			if(!instance){
				instance = init_instance();
			}
			return instance;
		}
	};

})();

var test_1 = singleton.get_instance();
//print(test_1.public_method);

var test_2 = singleton.get_instance();
//print(test_2.public_method);

//Verificamos 
print("Number 1: " + test_1.get_random_number());
print("Number 2: " + test_2.get_random_number());
print(test_1.get_random_number() == test_2.get_random_number());