
from abc import ABCMeta, abstractmethod

class Publisher(metaclass=ABCMeta):
	#Intefaz observable 
	def __init__(self):
		pass 

	def addObserver(self, observer):
		pass

	def DeleteObserver(self, observer):
		pass 

	def Notify(self):
		pass 


class Forum(Publisher):
	def __init__(self):
		self.userlist = []
		self.post = None

	def addObserver(self, observer):
		if(observer not in self.userlist):
			self.userlist.append(observer)

	def DeleteObserver(self, observer):
		self.userlist.remove(observer)

	def Notify(self):
		for observer in self.userlist:
			observer.notify_user(self.post)

	def WritePost(self, text):
		self.post = text
		self.Notify()

class Subscriber:
	def __init__(self):
		pass 
	def notify_user(self, post):
		pass 

class UserA(Subscriber):
	def __init__(self):
		pass 

	def notify_user(self, post):
		print ("User A ha sido notificado %s" %post)

class UserB(Subscriber):
	def __init__(self):
		pass 

	def notify_user(self, post):
		print ("User B ha sido notificado %s" %post)

if __name__ == "__main__":
	platziForum = Forum()
	user1 = UserA()
	user2 = UserB()

	platziForum.addObserver(user1)
	platziForum.addObserver(user2)

	platziForum.WritePost("Mi primer comentario en el foro")

	platziForum.DeleteObserver(user2)

	platziForum.WritePost("Mi segundo comentario en el foro")