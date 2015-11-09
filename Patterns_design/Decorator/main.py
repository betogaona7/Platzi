
from abc import ABCMeta

#Clase abstracta, componente
class Shape(metaclass=ABCMeta):
	def draw(self):
		pass 

#Componentes concretos
class Circle(Shape):
	def draw(self):
		print("I'm a circle")

class Rectangle(Shape):
	def draw(self):
		print("I'm a rectangle")

#Descorater, que tiene referencia al componente
#Es como la interfaz
class ShapeDecorator(Shape):

	def __init__(self, decoratedShape):
		self.decoratedShape = decoratedShape

	def draw(self):
		self.decoratedShape.draw()

	#Definimos una funcionalidad adicional
	def doSomethingElse(self):
		pass 

class ColorRedShapeDecorator(ShapeDecorator):
	def draw(self):
		self.decoratedShape.draw()
		self.doSomethingElse()

	#Imprementamos la funcionalidad adicional
	def doSomethingElse(self):
		print("Coloring red")

if __name__ == "__main__":
	#instanciamos un circulo
	circle = Circle()
	#Creamos otro objeto 
	redCircle = ColorRedShapeDecorator(Circle())

	circle.draw()
	print("######")
	redCircle.draw()