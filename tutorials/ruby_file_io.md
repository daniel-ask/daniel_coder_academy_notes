# Ruby File Reading and Writing

Reading and writing to files in ruby is something that can be done using the [ File class ](https://ruby-doc.org/core-2.7.2/File.html) that is in built into ruby.

## File read

The easiest way to read files in ruby is using the `read` method.
e.g.

```ruby
File.read('test.txt')
```

It takes one string as argument this string being the file location of the file. So if you had a file structure in this format:

![file structure](./file_structure_exmaple.png)

To access the `data.json` from `index.rb` the file path will be `./data/data.json`. Similarly if you were to try to access the `data.json` from `test.rb` the file path is `../data/data.json`.

NOTE: This changes with using classes and using index.rb as the entry point of an app. Because index.rb is the entry point when loading a file in a class that is instantiated in the index.rb the file path will have to be the one `./data/data.json`.

If this is confusing just make sure to use `./data/data.json` as your file path.

## File types

Probably the most basic format you might want to store your data is by using a text file this is ok but generally you want to use a file type that actually lets you retain some kind of format of your data. The some great file formats to use is json, csv and yaml. I will run through how I would use json to create persistent storage here but feel to give csv or yaml a go on your own.

## 