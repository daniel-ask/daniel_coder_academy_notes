# Data Types

Data handling is a crucial part of programming and we use data types to more accurately let our compilers and interpreters know each of our variables should be handled.

Each programming language will have different data types although maybe of them will have several similar ones. In ruby we are gonna cover 6 different types.

## Variables

We can assign our data in programming to variables. Declaring a variable is simple.

```ruby

# this is declared a variable named this_var
this_var

# To assign something the variable we us the = operators
this_var = 'String'

```
NOTE: that the convention to naming a variable in ruby is what is known as snake case. All letter should be lowercase and if a variable is multiple words should be connected by a _. 

## Strings

Strings are generally piece of text or a collection of character. The way to designate something is a String in ruby is by using the single quotation or double quotation.

```ruby

'This is a string'

"This is also a string"

```

### String manipulation

String has many methods that can be applied to it but often you want to add to string or combine strings. We can do this by concatenation and string interpolation.

```ruby

string_var = 'new string'

# Concatenation
'This string is a ' + string_var

# Interpolation
"This string is a #{string_var}"
# Note in order to interpolation we have to use the double quotations"
```

## Integer

Integer is the most basic number data type. A integer will not have a decimal place.

```ruby

this_integer = 5

```

With all integers we can do mathematical operations

```ruby
num_one = 3
num_two = 2

num_one + num_two # this will be 5
num_one - num_two # this will be 1
num_one * num_two # this will be 6
num_one / num_two # this will be 1

# Note with division the number will simply drop any decimal places or remainders.

# we can get the remainder using the % operator

num_one % num_two # this will be 1 as 3/2 has a remainder of 1

num_one ** num_two # this will be 9 as ** is how we do exponents
```
## Float

Float is another number data type but uses decimal places

```ruby
float_one = 1.0
float_two = 2.5

# we can apply mathematical operators to float like we do with integers
float_one + float_two # this will be 3.5

# we can apply mathematical operations between integers and floats
integer_one = 2

float_one * integer_one # this will be 2.0

# note when doing any mathematical operation with an float the result will also be a float.
```

## Boolean

Boolean has only two values true and false

```ruby
boolean_one = true
boolean_two = false
```

## Symbols

Symbols is a data type that is more unique to Ruby. They are very similar to string with a few distinctions

1. Symbols takes up less memory
2. Symbols with the exact value are linked through the same memory location
3. Symbols can not have spaces

```ruby
symbol_one = :symbol
```

## Nil

Nil is a special data type that represent nothing

```ruby

nothing = nil

```

## Coercion

Sometimes we want to turn something from one data type to another. This is what is known as coercion. In ruby this is done using a 'to' method.

```ruby
# Converting a integer to string
num = 1

string_one = num.to_s 
# sting_one is '1'
# to_s turns the num into a string

# converting a string to a float
float_one = string_one.to_f
# float_one is 1.0
```
# Basic Input and Output

With our ruby programs we can request input and output to the terminal using some of the in built methods in ruby.

## Output

Ruby has several methods to output to the terminal screen.

```ruby

# Puts outputs to terminal in a easy to read format without any indication of the data type. Great to use for terminal apps. Puts will also put a new line after.
puts 'Hello'
# Hello


# Print works exactly the same as puts but without the new line at the end.
print 'Hello'
# Hello

# P will print to the screen showing the data type and add a new line at the end. Great to use for debugging.
p 'Hello'
# "Hello"

# Pp or pretty print will do the same as p but may format some data in a more readable format. Particularly good for printing arrays and hashes.

pp 'Hello'
# "Hello"
```

## Input

The best way to take input from the terminal is using the `gets` method.

```ruby
puts "Enter a number:"
gets

# You can assign the input to a varible using the =
input =  gets

# Keep in mind that gets will always give back a string so in this case input will be the string that a user enters

# Some common string methods used with gets is chomp and strip.

input = gets.chomp

# chomp will remove the last character from input this is usually a new line character that is generated when the user hits enter in terminal.

# So if user enter "       hello      " chomp will give back "       hello      "   

input = gets.strip

# strip will remove all empty spaces before and after the input.

# So if user enter "        hello      " strip will give back "hello"
```