
class Presentation:
	#Constructor con una referencia a si mismo 
	def __init__(self):
		self.name = "Presentation_layer"

	#Funcion que nos ayuda a determinar la capa inferior
	def setLower_layer(self, lower_layer):
		#asociamos el lowerlayer de nuestra clase con el lower layer que nos asocian
		#generamos una comunicacion
		self.lower_layer = lower_layer

	#Esta capa provee servicio, se le pasa un parametro para identificar 
	# el servicio que queremos hacer 
	def service_3(self, parameter):
		#Este servicio solo imprime
		print("Entramos al servicio de %s" % self.name)
		# se va a apoyar en la capa 2, que recibe el mismo parametro 
		self.lower_layer.service_2(parameter)
		print("Salimos del servicio de %s" % self.name)


class Logic:
	def __init__(self): 
		self.name = "Logic_layer"

	def setLower_layer(self, lower_layer):
		self.lower_layer = lower_layer

	def service_2(self, parameter):
		print("Entramos al servicio de %s" % self.name)
		self.lower_layer.service_1(parameter)
		print("Salimos del servicio de %s" % self.name)

class Data:
	def __init__ (self):
		self.name = "Data_layer"

	def service_1(self, parameter):
		print("Entramos al servicio de capa 1 %s" % self.name)
		print("Ejectutamos el service_1 con el parametro: %s" % parameter)


if __name__ == "__main__":
	#asociamos las clases 
	layer_3 = Presentation() 
	layer_2 = Logic()
	layer_1 = Data() 		 

	#Conectamos las clases
	layer_3.setLower_layer(layer_2)
	layer_2.setLower_layer(layer_1)

	#Enviamos un parametro
	layer_3.service_3("Parameter example")
