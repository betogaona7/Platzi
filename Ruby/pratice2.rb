texto = "Yo quiero tomar cafe.
bastante,
y no dormir.

Pero mis amigos no me dejan, 
Tan lindos."

texto['no me dejan'] = 'ME DEJAN' #Remplazar la cadena que buscamos
puts texto
puts texto.length

p texto.lines.to_a #convertir a arreglo
puts "-" * 80


nombre_completo = "Alberto Gaona G."

#asignacion paralela del nombre
nombre, apellido = ["Alberto", "Gaona"]

puts nombre_completo
puts nombre
puts apellido

puts "-"*80

nombre, apellido = apellido, nombre
puts nombre
puts apellido

puts "-" * 80
#Concatenar
nombre = nombre + " " + apellido
puts nombre

#asignaciones
pollos = []
pollos[0] = :verde    #Esta y la siguiente es lo mismo, los corchetes tambien son metodos, y estamos asiendo asignaciones
pollos.[]=(1, :rojo)
pollos.[]=(2, :dorado)

p pollos

puts "-"*80

puts pollos.[](0)
puts pollos[0]