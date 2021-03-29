class Car
 @@number_of_wheels = 4
 @@number_of_cars = 0
 def self.number_of_wheels
  @@number_of_wheels
  @brand = 'honda'
 end
 def self.number_of_wheels=(number_of_wheels)
  @@number_of_wheels = number_of_wheels
 end
 def print_string
  puts "A car has #{@@number_of_wheels} wheels"
 end
end

puts Car.number_of_wheels
honda = Car.new
toyota = Car.new
Car.number_of_wheels = 5
puts Car.number_of_wheels
honda.print_string
toyota.print_string