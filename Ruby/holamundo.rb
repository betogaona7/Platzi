
puts "-" * 80
puts "Hello world"


puts "-" * 80
puts "Exercise 2 - arrays"

puts []
puts [].class
puts [].size 


ages = []
ages[0] = 20
ages[1] = 6
ages[2] = 19
ages << 12 << 23 << 21 << 21 << 29

puts "-" * 80
ages.each {|ages|puts(ages)}


puts "the first item is: " 
puts ages.first
puts "the last item is: "
puts ages.last


puts "Display items with one line"
puts ages[1,3]
p ages[1,3]
p ages.slice(1,2)


puts "Display a range"
ranges = []
p ranges[(0..10)]