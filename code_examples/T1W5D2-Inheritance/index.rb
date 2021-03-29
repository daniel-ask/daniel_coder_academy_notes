require_relative 'flight_module'

class Animal
  attr_reader :cold_blooded
  attr_accessor :number_of_legs

  def initialize(num_of_legs, cold_blooded)
    @number_of_legs = num_of_legs
    @cold_blooded = cold_blooded
  end

end
class Mammal < Animal
  include Flight
  attr_reader :fur_colour

  def initialize(fur_colour)
    super(4,false)
    @fur_colour = fur_colour
  end
  def got_milk?
    true
  end
end

class Bird < Animal
  include Flight
  def initialize
    super(2,false)
  end
end


# superclass parent class
# subclass child class
# Animal is the SUPERCLASS of Mammal
# Mammal is the SUBCLASS of Animal

spider = Animal.new(8, true)
puts spider.number_of_legs
panda = Mammal.new('white/black')
puts 'Number of legs of a Panda'
puts panda.number_of_legs
puts 'Do pandas produce milk?'
puts panda.got_milk?
puts 'Are pandas cold blooded'
puts panda.cold_blooded
puts 'What is the pandas fur colour?'
puts panda.fur_colour
puts 'Pandas can fly'
puts panda.can_fly?

penguin = Bird.new
puts 'Penguin has how many legs'
puts penguin.number_of_legs
puts penguin.can_fly?