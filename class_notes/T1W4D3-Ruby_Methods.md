# Ruby Methods

Methods is a way for us to be able to reuse code easily reducing the size of out code base and makes our code much easier to maintain, modify and extend upon.

Note that methods may have a different name in other languages the common one you will come across is functions. Just know that functions and methods are generally the same thing.

We have already seen methods being used previously. Some examples:
```ruby
.each
puts
gets
+
-
```
are all methods built into ruby.

## Conventions and principles

The way to name methods in ruby is exactly same way we name variables, that is to say it what is known as snake case. All letters in lower case and if multiple words seperated by a _
e.g.

```ruby

snake_case_method

```

An important principle that is one of the reason we use methods is the DRY principle. The DRY (Don't Repeat Yourself) principle states that we want to minimise repeated code and try to avoid any code repetition. As such it is recommend that anytime you are repeating the same code more than twice it should be put into its own method.

Another important principle to consider when creating methods is the SRP (single responsibility principle). This principle states that we want our methods to only have take on a single role or do one task. This means that if your method is doing many things such as possibly prompting and getting user input, calculating results and maybe then displaying those results to the screen. It is probably a good idea to break that method up into more smaller methods. A good rule of thumb is to keep all your methods 10 lines of code or below.

## Method declaration

```ruby
def name_of_method
end
```
## Call a method 

```ruby
name_of_method()
name_of_method

```

## Method return 

### Explicit return

```ruby
def return_a_string_method
 return 'string'
end
```

### Implicit return

```ruby
def return_a_string_method
 'string'
end
```

## Using the return from methods

```ruby
def method_one
  return 'hello'
end

message = method_one
# message will now be 'hello'
```

## parameters and arguments

positional parameter

```ruby
def method_with_parameters(positional_param)
end
```

## default param

```ruby
def method_with_default_param(positional_param1 = 'default1', positional_param2 = 'default2')
end

method_with_default_param
method_with_default_param('argument1')
method_with_default_param('argument1','argument2')
```
## named param

```ruby
def method_with_named_params(param_1:, param_2:)
    puts param_1
    puts param_2
end

def method_with_named_defaults(param_1: 'default', param_2: 'default2')
  puts param_1
  puts param_2
end
```

## Spread syntax

```ruby
my_array = [1,2,3,4]
first, *other_numbers = my_array
# first will be 1
# other_numbers will be [2,3,4]

def method_with_spread(first_param, *other_params)
end

puts method_with_spread(1,2,3,4,5,6)
```
## Combining parameters types

NOTE: You should try to avoid mixing using named and positional parameters in the same method declaration

Wrong way
```ruby
def method_one( named: 'parameter', *rest,positional )
  pp positional
  pp name
  pp rest
end
```

Right way
```ruby
def method_one(*rest,positional, named: 'parameter')
  pp positional
  pp name
  pp rest
end
```

## NOTE on calling and using methods in ruby

The above examples shows how I have used 