# Data structures and Control structures 

## Data structures 

Data structures are collection of data.

There are many different types of data structures but we will be looking at the two most commonly used in most programming languages. These are Arrays and Hashes. Now something to note here is that while most other programming languages have these they may be under different names. For example in python arrays and hashes are called list and dictionaries respectively. Something to note as well is that Ruby will also consider Arrays and Hashes as just other data types.

### Arrays

Arrays are indexed collection of data.

#### **How to declare an Array**

```ruby
arr = []
arr = Array.new
arr = Array.new(2)
arr = Array.new(2,2)
```

#### **Adding values**

```ruby
arr = [1,2,3]
arr.push(4)
arr.unshift(0)
arr << 5
```

#### **Accessing values**

```ruby
arr[0]
```

#### **Removing a value**

```ruby
arr.delete(1)
```

#### **Some common array methods**
```ruby
arr.first
arr.last
arr.include?(1)
arr.length
arr.sample
```
#### **Array Documentation** 

To read more about arrays and all the amazing methods that ruby has check out the documentation
[Ruby array documentation for ruby 2.7.0 can be found here](https://ruby-doc.org/core-2.7.0/Array.html)

### Hashes

Hashes are very similar to array except being indexed with number values are indexed using data in what is known as a key value pair. A key can be any data type but its recommended that all keys should be of the same data type and will very often be symbols in ruby.

#### **Declare a hash**

```ruby
my_hash = {}
my_hash = {one: 1, two: 2, three: 3}

# To declare a hash using any other type than symbols we need to use the => syntax 

hash_using_different_keys = {'one' => 1, 2 => 2, true => 3}

```

#### **Accessing a value from the hash**

```ruby
my_hash[:one]
hash_using_different_keys['one']
```

#### **Adding or changing a value to a hash**

```ruby
my_hash = {one: 1, two: 2, three: 3}
my_hash[:one] = 0
# To add a new key value pair just assign a value and reference a new key
my_hash[:four] = 4
```

#### **Deleting a hash value**

```ruby
my_hash.delete(:one)
```

#### **Common methods**

```ruby
my_hash.keys
my_hash.include?(:one)
```

#### **Hash Documentation** 

To read more about hashes and all the amazing methods that ruby has check out the documentation
[Ruby hash documentation for ruby 2.7.0 can be found here](https://ruby-doc.org/core-2.7.0/Hash.html)


### More about Strings

Strings can sometimes be viewed and treated like an arrays of characters. 

```ruby

string_one = 'String'

string_one[0]
# 'S'

string_one << ' is now longer'
# 'String is now longer' 

string_one[0] = 'P'
# 'Ptring is now longer'

# To actually turn a string into an array two very good method you could use is chars and split

string_one.chars
# ['P','t','r','i','n','g',' ','i','s',' ','n','o','w',' ','l','o','n','g','e','r']

string_one.split
# ['Ptring', 'is', 'now', 'longer']

# With split it will by default split a string on spaces but you can specify a char or sub string to split the original string

string_one.split('n')
# ['Pri','g is ','ow lo','ger']
# Notice when we are splitting the char or char we are splitting with is omitted.

```

## Control structures

Control structures allow us to dictate the flow of our program. Up until now our program has been running in a sequential manner in which we execute each line of code from top to bottom.
There are two main ways of control structures that we will be looking at, loops and conditionals

### Boolean revisited

Before talking about control structures we need to revisit boolean.

```ruby
# Booleans are either true or false
true
false

# You will often end up getting booleans from any comparison you do some common comparison are:


3 == 3 # Checks if two things are the same
3 != 3 # Checks if two things are different
# The following checks if somethings are bigger or smaller than others
3 > 1 
3 < 1
3 >= 1
3 <= 1

# Using the bang operator(!) allows us to inverse a boolean meaning we turn a statement that is true to false and vice versa

!true
# false
!(3 == 3)
# false
!(3 <= 1)
# true
```

We can also combine conditionals using the && (AND) and || (OR) operators

A statement with an && will only be true if both side are true
```ruby
true && true
# true

(3 == 3) && (3 > 1)
# true

(3 != 3) && (3 <= 5)
# false
```

A statement with an || will only be false if both sides are false
```ruby
false || false
# false

true || false
# true

(3 == 3) || (3 > 1)
# true

(3 != 3) || (3 <= 5)
# true

('test' != 'test') || (3 < 1)
# false
```

Everything in ruby has an inherit boolean linked to it. We call this truthy or falsey depending on what the piece of data is. In ruby only two things are false, the boolean `false` and `nil`.

```ruby
string = 'string'

# when we use string in a condition it will return true

nil_variable = nil

# the nil_variable is falsey

# You can check whether something is truthy or falsey using the ! operator like this:
!!string
# true

# this works as the ! will convert string to a boolean but inverse we then use the second bang to revert it back to its original truthy or falsey value.
```
Now that we know a little more about boolean and boolean statements we can use these in out control structure

### Conditionals

Conditionals allows us to specify when a specific set of code is executed depending on certain conditions.

#### **if else elsif/ unless**

if statements are the most basic andu common control structure you will find in nearly all programming languages. It will check a boolean condition and then execute its enclosed code if that condition is true.

```ruby
if true
    puts 'That is true'
end

```
We can use `elsif` to check other conditions and an else to provide some code that will execute if none of the `if` or `elsif` conditions are met.

Keep in mind that order matters here and if several conditions are true only the first condition met will execute.

```ruby
number = 1

if number == 1
    puts 'Number is 1'
elsif number > 0
    # In this example this part will not execute despite number is larger than 0. This is because the above conditions is true too and therefore executes.
    puts 'Number is positive'
elsif number < 0
    puts 'Number is negative'
else
   puts 'number is something else'
end
```

#### **unless** 

Unless is kind of the inverse of an `if` statement and is the same as doing `if !(condition)`. This is the more ruby way of checking a statement that is not true.

```ruby
lost = false

if !lost
    puts 'Item has been found'
end

unless lost
    puts 'Item has been found'
end
```

#### **case**

Case statement (or know as a switch in other languages) is another conditional control structure. While not as customizable as an if statement they are generally preferred when you want to check a single variable against several conditions. Another benefit of case statement is that it generally faster than `if` as each condition is not checked in a case statement but instead it goes directly to the matching case.

```ruby
case number
when 1
    puts 'number is 1'
when 2
    puts 'number is 2'
when 3
    puts 'number is 3'
else
    puts 'number is something else'
end
```

#### **Ranges**

There are these special objects in ruby called ranges. This special structure allows us to hold a collection of integers or characters in ascending or descending order.
They work very similar to arrays and in fact can be coerced into one quite easily.

```ruby
(1..4)

('a'..'z')

(1..4).to_a
# this will return the array [1,2,3,4]
```

#### **Ranges use cases**

Ranges can be used in case statements to check if something is within a range of numbers or character.

```ruby
case number
when 1..4
    puts 'Number is between 1 to 4'
when 5...8
    puts 'Number is between 5 to 8'
when 8..10
    puts 'Number is between 8 to 10'
when 10...
    puts 'Number is greater than 10'
else
    puts 'Number is negative'
end
```

Another use case for ranges being able to get subsets of arr.

```ruby
arr  = [1,2,3,4,5]
arr[1..2]
# [2,3]
arr[...3]
# [1,2,3]
```

Note the number of `.`. Two `..` means inclusive while `...` means exclusive of the right number

```ruby
(1...4).to_a
# [1,2,3]

(1..4).to_a
# [1,2,3,4]

```

When not giving ranges a rightmost/leftmost number/character means the range will extend endlessly or as far as it can. These should only be used for case statement and when creating subset of arrays.

```ruby
arr = [1,2,3,4]
arr[..2]
# [1,2,3]
arr[2..]
# [3, 4]
```

### Loops

Loops allows us to repeatedly run the same code

#### **while/until**

While repeats code while its condition is true

```ruby
counter = 1
while counter <= 10
    puts counter
    counter += 1
end
```

Until will repeat its code until its condition is true. This is the same as having `while!(condition)`

```ruby
counter = 1
until counter < 0
    puts counter
    counter -= 1
end
```

#### **loop do**

Sometimes we want a endless loop. This can be done with `while true` but a better way to do this is the `loop do`

```ruby

loop do
  puts 'This is going to be printed infinitely'
end

``` 

#### **iterators**

Iterators are methods that allows us to traverse arrays and hashes

##### **each**

Each is probably the most used commonly used iterator and allows us to traverse each element in an array or hash.

```ruby

arr = [1,2,3,4,5]

arr.each do |num|
 puts num
end

hash = {first_name: 'Daniel', last_name:'Ask'}

hash.each do |key, value|
    puts "#{key}: #{value}"
end
```
##### **map**

Map will go through each element in array or hash and change the each element depending on what you pass into the block.

```ruby

arr = [1,2,3,4,5]

arr.map do |num|
    num += 1
end

# [2,3,4,5,6]

```


##### **select**

Select (and its alias filter) allows us to select only elements that meets the boolean condition we put in the do block.

```ruby
arr = [1,2,3,4,5]

arr.select do |num|
  num > 2
end

# [3,4,5]

hash = {first_name: 'Daniel', last_name:'Ask'}

hash.select do |key, value|
    value == 'Daniel'
end

# {first_name: 'Daniel'}
```

## Further concepts

### Mutator methods 

Many iterators and other methods has a mutator version which will mutate the original data. In ruby these method will often have a `!` attached to it.

```ruby
array_one = [1,5,3,6,2]
array_one.map!{ |num| num + 1}
# array_one will now be changed to [2,6,4,7,3]
array_one.sort!
# array_one will now be changed to [2,3,4,6,7]
```

### Modifier

Modifier allows to structure our if/unless/where/until methods that are just one line into a much more compact format by putting the control structure at the end of the line.

```ruby

puts 'Hello Daniel' if name == 'Daniel'

puts 'Hello Daniel' unless name == 'Daniel'

i += 1 while i < 10

```

### Ternary operators

A ternary operator is a more compact way of writing a `if else` statement onto one line.

``` ruby
start = true

start ? puts 'started' : puts 'not started'

starting_status = start ? 'started' : 'not started'

```

### next and break

The next keyword will allow us to move on to the next run of a loop.

```ruby

arr = [1,2,3,4]
counter = 0 
while counter < arr.length
  if arr[counter] % 2 != 0
    counter += 1
    next
  end
  print "#{arr[counter]},"
  counter += 1
end

arr.each do |num|
  next if num.odd?
  print "#{num},"
end
```

The break keyword will allow us to exit a loop early

```ruby

arr = [1,2,3,4]
arr = [1,2,3,4]
counter = 0 
while counter < arr.length
  break if arr[counter] == 3
  print "#{arr[counter]},"
  counter += 1
end

arr.each do |num|
  break if num == 3
  print "#{num},"
end
```

### Short circuit

Short circuit allows us to assign a value to a variable only if that variable is falsey such as `nil`

```ruby
user = {name: 'Daniel', age:31}

user ||= {}

# in this case user will still be {name: 'Daniel', age:31}

new_user = nil

new_user ||= {}

# in this case new_user is nil so now it will be {}

```