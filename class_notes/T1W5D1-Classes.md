# Classes

Classes are a big part in Object orientated programming. You can see classes as 
blueprint for how we want different objects to behave. We have already seen many of the classes already built into ruby. These include Strings, Integers, Float, Array and Hashes. 

It is important to remember that everything in ruby is an object or a method. We can tell what class a object belong to by using the `.class` method.

```ruby
1.class
# Integer
'string'.class
# String
```
Although the classes built into ruby are extensive we often want to be creating our own classes. Each class should have its own file.

## Class declaration

Classes can be defined using the `class` ruby keyword. The ruby convention to naming a class is using PascalCase. Each word of the class name should start of with a capital and be directly joined together without any hyphens(-) or underscores(_).

```ruby
class ClassName
end
```
## Using a class

To assign a variable to our new class we need to use the `new` method. You may have seen this being used in alternative ways of creating arrays and hashes.

```ruby
class ClassName
end

class_var = ClassName.new
```

## Initialize

An important part of creating a new class is defining the initialize method. This is the method that executes when we create a new object of our class using `new`. This method is also referred as the constructor.

```ruby
class ClassName
  def initialize
    puts 'In the initialize method'
  end

end

class_var = ClassName.new
```
## Instance variables

We can also assign variables to our classes. One type of these variable are instance variables. An instance variable is unique for each instance of our class. Instance variable are usually assigned in the intialized in the intialize method. Instance variables are scoped within the whole class.

```ruby

class ClassName
  def initialize
    @instance_var1 = 'string'
    @instance_var2 = 2
  end
end


class ClassName2
  def initialize(param1, param2)
    @instance_var1 = param1
    @instance_var2 = param2
  end
end

class_one_var = ClassName.new

class_two_var = ClassName2.new('argument1','argument2')
```

## Accessor and Mutators / Getters and Setters

Instance variable are only scoped to be within our class and such can not be called upon outside it. We may however want the ability to read these variables or even change them from outside the class. To do this we need to make special methods that are known as getter and setters or accessors and mutators. A getter allows us to read an instance variable while a setter lets us change an instance variable.

In many programming languages the way to do this is by having a method that return these variables for getters and a method that takes a parameter to change the variable with a setter. We can do same thing in ruby.

The old way
```ruby
class ClassName
  def initialize(param1,param2)
    @instance_var1 = param1
    @instance_var2 = param2
  end

  def instance_var1 
    @instance_var1
  end
  
  def instance_var1=(instance_var1) 
    @instance_var1 = instance_var1 
  end
end
```

Although as this is so commonly done ruby provides some nifty ways for us to skip having to write our own getter and setter methods. This is dunt by using an attr declaration at the top of your class.

The best way
```ruby
class ClassName
  attr_reader :instance_var1
  attr_writer :instance_var2
  attr_accessor :instance_var3

  def initialize(param1, param2, param3)
    @instance_var1 = param1
    @instance_var2 = param2
    @instance_var3 = param3
    end
end
```
An `attr_reader` allows us to read a variable like a getter.
An `attr_writer` allows us to manipulate a variable like a setter.
An `attr_accessor` allows us to both read and manipulate a variable.

Now we can read and write to instance variable

```ruby
new_class_var = ClassName.new('argument1','argument2' 'argument3')

puts new_class_var.instance_var1
new_class_var.instance_var2 = 'new'
new_class_var.instance_var3 = 'new'
puts new_class_var.instance_var3
'this string'.class.superclass

```

Make sure you only set only the least amount of access that is required for each variable.

## Instance methods

Along with instance variable with can also create instance methods. These are method that belong to a class. Some examples of instance methods that you may have already seen are `each`, `length`, `map` etc.


To make a instance method you do exactly the same as you would declare any other method only you place in the class scope.
```ruby
class ClassName
  def initialize(param1, param2, param3)
    @instance_var1 = param1
    @instance_var2 = param2
    @instance_var3 = param3
  end
  def instance_method1
    if @instance_var1
      @instance_var1
    else
      @instance_var2
    end
  end
  def instance_method2(param1)
    return param1 if param1 == @instance_var1
    @instance_var2
  end
end

```
Now the method can be called.

```ruby

new_class_var = ClassName.new('argument1','argument2' 'argument3')

puts new_class_var.instance_method1
puts new_class_var.instance_method2('argument1')

```

We can also overwrite some methods such as the to_s method.

```ruby
class ClassName
  def to_s
    "This is a ClassName Object"
  end
end
```
## Class variables

Another type of variable we can create is a class variable. This variable is shared among all instances of a class and belongs to the actual class rather than the instance of a class.

```ruby
class ClassName

  @@class_variable = 1

end
```

## Self

Self is a keyword in ruby that exist to allow you to reference the object inside its scope.

```ruby
class ClassName
  def print_self
   puts self
  end
end

test_class = ClassName.new
test_class.print_self
```

## Class Methods

The main use for self is to create class methods

```ruby
class ClassName
  def self.class_method
  end
end
```
