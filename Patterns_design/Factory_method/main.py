
#Importamos el paquete abc para crear una clase abstracta
from abc import ABCMeta

#Clase abstracta  (Interfaz)
class Car(metaclass = ABCMeta):
	#Constructor que hace solo referencia a un nombre y velocidad
	def __init__(self):
		self.name = None
		self.speed = None

	#Equivalente a toString()
	def __str__(self):
		return "name is {:s}, and speed is {:s}".format(self.name, self.speed)

#Instancias de la clase Car--------------
class Sport_car(Car):

	def __init__(self):
		self.name = "Challenger"
		self.speed = "320 km/hra"

class Family_car(Car):

	def __init__(self):
		self.name = "Tsuru"
		self.speed = "130 km/hra"
#-----------------------------------------------------------

#clase factory (fabrica de constructores)
class Factory:
	def build_car(self, car_type):
		self.car = None 

		if(car_type == "Sport"):
			self.car = Sport_car()
		elif(car_type == "Normal"):
			self.car = Family_car()
		else:
			print("Car type {:s} is not defined ".format(car_type))

		return self.car

#clase principal 
if __name__ == "__main__":
	factory = Factory()
	s = factory.build_car("Sport")
	print (s)

