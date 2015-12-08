from abc import ABCMeta

class TextFinder (metaclass=ABCMeta):
	def find(self, text):
		pass

class SpanishFinder(TextFinder):
	def find(self, text):
		return "{:s} fuen encontrado".format(text)

class EnglishFinder(TextFinder):
	def find(self, text):
		return "{:s} was found".format(text)

if __name__ == "__main__":
	spanish = SpanishFinder()
	english = EnglishFinder()

	print(spanish.find("abs"))
	print(english.find("abs"))