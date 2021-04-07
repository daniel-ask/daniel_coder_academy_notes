# Ruby File Reading and Writing

Reading and writing to files in ruby is something that can be done using the [ File class ](https://ruby-doc.org/core-2.7.2/File.html) that is in built into ruby.

## File read

The easiest way to read files in ruby is using the `read` method.
e.g.

```ruby
File.read('test.txt')
```

It takes one string as argument this string being the file location of the file. So if you had a file structure in this format:
![]()