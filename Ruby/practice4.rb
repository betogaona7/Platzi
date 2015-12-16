

puts "dia dos"

["pollo", "Arroz"].each do |alimento|
	puts alimento
end

#lo que esta entre do y end es llamado BLOQUE
puts "-" * 80

#Esto es lo mismo que el bloque de arriba.
["pollo", "Arroz"].each {|alimento| puts alimento}

each - para cada elemento ejecuta elbloque