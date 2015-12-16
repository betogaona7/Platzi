
["Pollo", "Arroz"].each do |alimento| 
	puts "El alimento es: #{alimento}"
end



def three_times
  yield
end 


three_times {puts "Programming ruby.."}