# Inheritance

Inheritance is another way that we can make our code more DRY, modular, easier maintainable. Inheritance allows us to create a hierarchy with our classes such that different classes can share common behaviors through a parent or super class. In ruby everything is an object and such will inherit from the object class. We can check an objects superclass using the superclass method keyword or the ancestors method.

```ruby
'this string'.class.superclass
# Object
'this string'.class.ancestors
```

## Declaring superclass

```ruby
class ParentClass
end
class ChildClass < ParentClass
end
```
In this case here the ChildClass is an subclass of ParentClass and ParentClass is a superclass of ChildClass.

## Methods and variable behaviour

Child classes will inherits all methods and variables of the parent class unless specifically overwritten.

```ruby
class ParentClass
  def initialize
    @variable1 = 'hello'
    @variable2 = 'hello2'
  end
  def parent_method
    puts @variable1
  end
end
class ChildClass < ParentClass
end

child_variable = ChildClass.new
child_variable.parent_method
```

## Super

The super keyword will execute the parents class version of a method.

```ruby
class ParentClass
  attr_accessor :variable2
  def initialize
    @variable1 = 'hello'
    @variable2 = 'hello2'
  end

  def parent_method
    puts @variable1
  end
end
class ChildClass < ParentClass
  def initialize(name)
    super()
    @variable1 = name
  end
end

child_variable = ChildClass.new('cool')
child_variable.parent_method
p child_variable
```

# Modules and Mixins

Modules are collection of code. Modules will often have either methods or classes within it.
Modules can also be used as a mixin where we want to include the modules in our classes.

## Declaring a module

I recommend that you keep all your modules in a separate file.

```ruby
module ModuleName
end
```

## Adding variables, methods and classes

```ruby
module ModuleName
  CONTSTANT_VARIABLE = 'Constant'
  class TestClass
  attr_accessor :param1
    def initialize(param1)
      @param1 = param1
    end
  end

  def module_method
  end

  def self.module_method2
  end
end
```

## Using the module

```ruby
ModuleName::CONSTANT_VARIABLE
ModuleName.module_method2
test_var = ModuleName::TestClass.new
test_var.param1

```

## Mixin

Another use of modules is to use them as mixin.
As ruby does not support multiple inheritance we need another way to gain functionality from different sources. This is where modules and mixins come handy.

### Example module

```ruby
module ModuleExample
  def print_class
    puts self.class
  end
end
```
### Including the module into our class

```ruby
class ClassExample
  include ModuleExample
end
```
### Using the included module

```ruby
new_class = ClassExample.new
new_class.print_class
```
