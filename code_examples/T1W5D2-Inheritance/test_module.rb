module TestModule
  NUMBER = 3
  class TestClass
    def print_something
      puts 'I AM IN TEST CLASS!'
    end
  end
  def self.print_something
    puts NUMBER
    puts 'I AM IN MODULE METHOD!'
  end
end

puts TestModule::NUMBER
test = TestModule::TestClass.new
test.print_something