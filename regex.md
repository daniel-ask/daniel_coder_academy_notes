## REGEX

What is regex?

Is a tool to do pattern matching particularly in Strings

Its quite programming languages agnostic tool as it have been implemented and adapted into many languages.


### Syntax examples

```
/ / generally how to start it

? 0 or 1 optional
+ 1 or more
* 0 or more
. match anything but new line

capitals is opposite of lower cases

\w word
\s whitespaces
\d digit

\w{4} 4 letter words
\w{4,6} 4 to 6 letters
\w{4,} 4 or modern

[] characters sets
[a-z] ranges [0-9]

\ for alphabet special for symbols allow match

() groups
| or

^ beginning of string
$ end of the string

look ahead

positive look behind
(? <= e).

negative look behind
(? <! e)

positive look ahead
.(?=at)

negative look ahead
.(?!at)

group names

$1$2$3
(?<name>)