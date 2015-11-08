
#Importamos el paquete abc para crear una clase abstracta
from abc import ABCMeta, abstractmethod

#Clase abstracta (Fabrica) FABRICA ABSTRACTA
class Industry(metaclass = ABCMeta):
	#Constructor para identificar a la empresa
	def __init__ (self):
		self.manufacture = None

	#Equivalente a toString()
	def __str__ (self):
		return "the manufacture is {:s}".format(self.manufacture)

	@abstractmethod
	def build_car(self, car_type): 
		pass

	@staticmethod
	def get_industry(industry_name):
		if(industry_name == "VW"):
			return VW_Industry()
		elif(industry_name == "Dogde"):
			return Dodge_Industry()
		#lanzar excepcion en caso de que no exista
		raise TypeError("Unkown Industry")

#---------------------------------------------------------
#Clase abstracta  (Interfaz) PRODUCTO ABSTRACTO
class Car(metaclass = ABCMeta):
	#Constructor que hace solo referencia a un nombre y velocidad
	def __init__(self):
		self.name = None
		self.speed = None

	#Equivalente a toString()
	def __str__(self):
		return "name is {:s}, and speed is {:s}".format(self.name, self.speed)

#Instancias de la clase Car PRODUCTOS CONCRETOS------------
class Sport_car(Car):

	def __init__(self):
		self.name = "Challenger"
		self.speed = "320 km/hra"

class Family_car(Car):

	def __init__(self):
		self.name = "Charger"
		self.speed = "210 km/hra"
#-----------------------------------------------------------

#clase factory (fabrica de constructores) de la marca Dodge
class Dodge_Industry(Industry):

	def __init__(self):
		self.manufacture = "Dodge"

	def build_car(self, car_type):
		self.car = None 

		if(car_type == "Sport"):
			self.car = Sport_car()
		elif(car_type == "Normal"):
			self.car = Family_car()
		else:
			print("Car type {:s} is not defined ".format(car_type))

		return self.car

#clase factory(fabrica de constructores) de la marca vW
class VW_industry(Industry):

	def __init__(self):
		self.manufacture = "VW"

	def build_car(self, car_type):
		self.car = None

		if(car_type == "Sport"):
			self.car == Sport_car()
		else: 
			print("Car type {:s} is not defined ".format(car_type))
		return self.car

#clase principal 
if __name__ == "__main__":

	factory = Industry.get_industry("Dogde")
	print (factory)

	s = factory.build_car("Sport")
	print (s)
