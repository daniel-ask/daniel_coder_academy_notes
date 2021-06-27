**AJAX**

*Does anyone know what AJAX stands for?*

	Ajax (also AJAX /ˈeɪdʒæks/; short for "Asynchronous JavaScript and XML")[1][2] is a set of web development techniques using many web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.

	Ajax is not a single technology, but rather a group of technologies. HTML and CSS can be used in combination to mark up and style information. The webpage can then be modified by JavaScript to dynamically display—and allow the user to interact with—the new information. The built-in XMLHttpRequest object, or since 2017 the new fetch function within JavaScript, is commonly used to execute Ajax on webpages, allowing websites to load content onto the screen without refreshing the page. Ajax is not a new technology, or a different language, just existing technologies used in new ways.

AJAX stands for Asynchronous JavaScript and XML.

*Now we have talked about asynchronous code before when we were talking about callbacks.
What does asynchronous mean?*

Non-Blocking or Asynchronous code is when a line of code is executed and the program is able to move on before that line of code has finished.

Or in more laymen's terms asynchronous is code that can be ran outside of the normal flow of our program.

This has some amazing benefits because it means we can run code without have to re-run the whole program or in the browsers case refresh the page.

AJAX is a developer's dream, because you can:

* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server - after the page has loaded
* Send data to a server - in the background

Let's take a look at this in the wild.

*Go to Slack web app. Open up the network tab in console. Click around to different channels and notice how we are getting data without have to refresh the page. Send a message on Slack and inspect the XHR request.*

*Refresh students on HTTP status codes, different HTTP methods and what are content-types.*

AJAX uses a combination of:

*  XMLHttpRequest (XHR) - A Web API used for sending and receiving data
    * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
* JavaScript - To handle the XHR response

**XML**

```
Lets say that we have a database of CA students which changes every 6 months.
A T-shirt company comes around and want to print a  personalised T-shirt for everyone of our students.
How could we give them each students name & their nickname?
```

Lead to these answers:
* Phone
* Email
* Google Docs (Spreadsheet)

Settle on this answer:
* Web server

eXtensible Markup Language (XML) is a markup language much like HTML but it was designed to store and transport data.

```xml
<cohort>
  <student>
        <name>K. West</name>
        <nickname>Ye</nickname>
        <dateOfBirth>1977-06-08</dateOfBirth>
  </student>
  <student>
        <name>A. Graham</name>
        <nickname>Drake</nickname>
        <dateOfBirth>1986-10-24</dateOfBirth>
  </student>
</cohort>
```

It is very descriptive and was one of the main methods for passing data around the internet in the past. However this format does not translate easily into something we can use in Javascript so a better format was needed. In comes JSON.

**JSON**

JavaScript Object Notation (JSON) was created as a format that is easy for humans to read and write as well as for machines to parse and generate.

Going back to the question above lets take a look at what our data might look like coming from the database.

```
[
    {name:"K.West", nickname:"Ye", dateOfBirth:"1977-06-08"},
    {name:"A. Graham", nickname:"Drake", dateOfBirth:"1986-10-24"}
]
```

And now lets take a look at what a JSON string looks like

```
"[
    {"name":"K.West", "nickname":"Ye", "dateOfBirth":"1977-06-08"},
    {"name":"A. Graham", "nickname":"Drake", "dateOfBirth":"1986-10-24"}
]"
```

Almost identical!

Thats right JSON was written so that it's format mimics what JavaScript objects already look like. Because of this it makes it very easy to parse a JSON string into actual JavaScripts arrays and objects.

*Paste this JSON string into slack*

```
"[{\"name\":\"K.West\",\"nickname\":\"Ye\",\"dateOfBirth\":\"1977-06-08\"},{\"name\":\"A. Graham\",\"nickname\":\"Drake\",\"dateOfBirth\":\"1986-10-24\"}]"
```

*Ask students to pull out the name from the first element in the array.*

*This should cause some friction.*

JSON is a string so it is not actually usable in JavaScript straight away. Instead to actually turn this string into really JavaScript elements we need to pass the JSON string through **JSON.parse()**

```javascript
let studentArray = JSON.parse("[{\"name\":\"K.West\",\"nickname\":\"Ye\",\"dateOfBirth\":\"1977-06-08\"},{\"name\":\"A. Graham\",\"nickname\":\"Drake\",\"dateOfBirth\":\"1986-10-24\"}]");

console.log(studentArray);
```

And to turn JavaScript objects into JSON we can use **JSON.stringify()**

```javascript
let studentJSON = JSON.stringify([
    {name:"K.West", nickname:"Ye", dateOfBirth:"1977-06-08"},
    {name:"A. Graham", nickname:"Drake", dateOfBirth:"1986-10-24"}
]);

console.log(studentJSON);
```

**XHR**

*How many threads does JavaScript have?* - **1**

*Which means how many call stacks does JavaScript have?* - **1**

*Which means how many things can JavaScript process at a time?* - **1**

Thats right JavaScript is a single threaded programming language so it is blocking by nature. So we need to use a different mechanism outside of JavaScript to make our code asynchronous. In comes XHR, which is the Web API for sending and receiving data.

Here is an example of an XHR request.

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <button>Get User Data</button>

    <script>
        document.querySelector("button").addEventListener("click", getUserData);
        function getUserData() {
            console.log("starting request");
            
            let request = new XMLHttpRequest();
            request.open('GET', 'https://randomuser.me/api/', true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    console.log(request.responseText);
                } else {
                    console.log("Error");
                    console.log(request);
                }
            };
            request.onerror = () => {
                console.log("Connection error");
            };
            request.send();
        }
    </script>
</body>
</html>
```

As you can see we were able to get send a request to the server and get a response without have to refresh our web page.

But there may have been something else a little interesting you may have noticed.

*What type of data was retrieved from the request?*

That's right JSON! XHR (XMLHttpRequest) is a bit of a misleading name. Yes you can use it to transport XML data but is is equally as common to transport data as plain text or in this case JSON.

*Have the students parse the JSON response (JSON.parse()) and log to the console the first results full name.*

That was awesome but a bit complicated to put together. XHR requests are not the easiest things to work with. So modern JavaScript AJAX libraries try to abstract this complexity away. In our previous lesson we used the JQuery library to make a request. Lets modify the above example to use JQuery instead trying to put together the XHR request ourselves.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button>Get User Data</button>

    <script>
        document.querySelector("button").addEventListener("click", getUserData);

        function getUserData() {
            console.log("starting request");

            $.ajax({
                url: 'https://randomuser.me/api/',
                type: 'GET',
                success: (data) => {
                    console.log(data);
                },
                error: (error) => {
                    console.log("Error");
                    console.log(error);
                }
            });
        }
    </script>
</body>
</html>
```

Easier right? But if we take a look at the network tab in the console it is still make the same XHR request we were doing before. So the lesson to take away here is that most modern AJAX libraries are built on top of XHR requests. They are just there to abstract away the complexity.

*Create a new rails app*

```
rails new student_api -d postgresql
cd student_api
rails db:create
rails g scaffold Student name:string location:string
rails db:migrate
//database/seeds.rb
```

```ruby
10.times do 
    Student.create(
        name: Faker::Name.name,
        location: Faker::Address.full_address
    )
end
```

```
rails db:seed
rails s
```

When we scaffold in rails it will give us a normal html page.

*Go to http://localhost::3000/students*

But it also will give use a .json url as well.

*Go to http://localhost:3000/students.json*

Lets modify our code so that we are now requesting JSON from the rails app we have just created.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button>Get User Data</button>

    <script>
        document.querySelector("button").addEventListener("click", getUserData);

        function getUserData() {
            console.log("starting request");

            $.ajax({
                url: 'http://localhost:3000/students.json',
                type: 'GET',
                success: (data) => {
                    console.log(data);
                },
                error: (error) => {
                    console.log("Error");
                    console.log(error);
                }
            });
        }
    </script>
</body>
</html>
```

It looks like we are given an error. Lets dive a little deeper into what exactly this error means.

**CORS**

*Has anyone here heard of CORS before?*

*Does anyone know what CORS stands for?*

**Cross-origin resources sharing (CORS)**, is a security relaxation measure.

By default, web browsers do not allow AJAX requests to servers other than the site you're visiting. This is called the same-origin policy and it's an important part of the web security model.

Having said that, there are ways to bypass the same-origin policy and CORS is one of the most common methods of relaxing server security. CORS will allow you to specify who or what can access your endpoint on the server side.

We implement CORS by adding a response header on our server named **Access-Control-Allow-Origin.**

In rails we put this in the config/application.rb file. We also need to restart the server after the change.

```ruby
config.action_dispatch.default_headers = {
  'Access-Control-Allow-Origin' => '*'
}
```

The asterisk means we are allowing any connection to our API to be allowed but in a real world example we may want to limit it to only trusted or **whitelisted** domains.

Lets now also use AJAX to POST some data. We will create a new student.

Before we do this remember that rails by default needs an authenticity token when receiving POST or PUT/PATCH requests. But we can disable this off by adding some code to our student controller.

//Add to the top of the file just after the class definition

```ruby
skip_before_action :verify_authenticity_token
```

Ok lets try creating a new student through AJAX.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button>Get User Data</button>

    <script>
        document.querySelector("button").addEventListener("click", getUserData);
        
        function getUserData() {
            console.log("starting request");
            $.ajax({
                url: 'http://localhost:3000/students.json',
                type: 'POST',
                data: { student: { name: 'John', location: 'Brisbane' } },
                success: (data) => {
                    console.log(data);
                },
                error: (error) => {
                    console.log("Error");
                    console.log(error);
                }
            });
        }
    </script>
</body>
</html>
```

Awesome! We created a new student without having to refresh the page.

**Fetch API**
response.text() – read the response and return as text,
response.json() – parse the response as JSON,

We have been using the JQuery library to abstract our XHR calls. Ans as we have seen JQuery's AJAX methods use a callback to handle the response. Most modern day XHR abstractions (https://github.com/axios/axios) do not use callbacks but instead return promises.

JavaScript now has a new API called the Fetch API. This API was developed to make AJAX requests easier and replace the older, more complicated XHR requests.

Here is an example

```javascript
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => console.log(response))
    .catch(err => console.log(err));
```

This just returns the response object. To get the actual body of the response we can use the **.json()** method. This method returns a promise as well so to access the data we need to modify our code to this.

```javascript
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

The Fetch API also takes in a second argument to set different options for the request. Lets create a new student in our Rails app that we spun up earlier using the Fetch API.

```javascript
let url = "http://localhost:3000/students.json";

data = { student: { name: "Sarah", location: "Sydney" } };

fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data), //body data type must match "Content-Type" header & remember JSON is a string!
});
```

And there we go! We are now using the Fetch API instead of XHR to send requests asynchronously to the server.

**Async / Await**

Promise.all() was able to save us in this case but what if we didn't want to wait for all the promises to get done to start rendering to screen. Maybe we want to start rendering after only a couple of pieces. Well Promise.all() is sort of an all or nothing method so that isn't going to help us and we don't really want to enter promise hell again. If only there was a better solution.

Welcome **async / await!**

Async / await is in essence syntactic sugar on top of promises to help make promise more manageable.

To use async / await we must first declare the function that will have asynchronous code within it as async.

index.js

```javascript
//import example from './callback';
//import example from './promise';
import example from './await';

console.log("1");

example(1);
example(2);
example(3);
example(4);

console.log("2");
```

await.js
```javascript
import utils from './utils';

export default async function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;
}
```

This lets JavaScript know that hey there is going to be some asynchronous code within this function that I am going to want to wait on to finish before moving on. Now we have the ability to pause our code wait for the asynchronous function to finish.

```javascript
import utils from './utils';

export default async function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    let body = await utils.promiseRequest(bodyUrl);
    utils.mountImage(body, index);
}
```

We can run as many asynchronous calls we would like with the function using the await keyword.

*Ask the class to finish the rest of the code so that each body piece is mounted after fetched from the api.*

```javascript
import utils from './utils';

export default async function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    let body = await utils.promiseRequest(bodyUrl);
    utils.mountImage(body, index);
    
    let eyes = await utils.promiseRequest(eyesUrl);
    utils.mountImage(eyes, index);

    let mouth = await utils.promiseRequest(mouthUrl);
    utils.mountImage(mouth, index);
}
```

Now ask the class to only mount the image once all the pieces have been received from the API.

```javascript
import utils from './utils';

export default async function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    let body = await utils.promiseRequest(bodyUrl);
    let eyes = await utils.promiseRequest(eyesUrl);
    let mouth = await utils.promiseRequest(mouthUrl);

    utils.mountImage([body, eyes, mouth], index);
}
```

Pretty easy right! Async / await is amazing for cleaning up our code but it's only downfall is that await does basically pause your code from running until the asynchronous function has returned. This means we will never be able to get the same kind of speed boost like we did with Promise.all() when we were able to send out all requests at once and then only handle the responses once they were all done.

Also remember that aysnc / await is just syntactic sugar for promises. So we can still use .then and .catch statements on the async function itself to handle any errors. If we wanted to handle our errors inside of the async function though we will have to use a try / catch statement.

**Cookies**

We have talked about cookies before when we looked in Rails and how Devise keeps track of logged in users.

*Can anyone remember what is a cookie?*

In essence a cookie is key / value storage that is associated to a particular domain and has a particular lifetime.

For a different explanation on what is exactly a cookie lets take a look at this video.

https://www.youtube.com/watch?v=I01XMRo2ESg

Lets check out what cookies we already have saved.


*Browse the web and look at all the different cookies sites have saved to our browser.*

*Mess around with some cookies and see if we can get anything to change.*

*On a shopping website add something to the cart and then refresh the page, our cart still has stuff in it. Clear the cookies and refresh again.*

Ok now that we have seen that other websites are saving cookies to browser lets add some cookies of our own.

*Some **browsers do not allow cookie storage for file paths**, Google Chrome being one of those. To save cookies for a file path (aka local file your opening up in your browser) please use Firefox. This may change in the future but right now it still allows it.*

Instead of setting cookies manually through our dev console we can also read and write the through JavaScript.

```javascript
let cookies = document.cookie;

console.log(cookies);
```

This brings back a list of all the cookies saved to our browser for that domain. 

If we would like to set a cookie we can just use this.

```javascript
document.cookie = "coderAcademy=awesome";

console.log(document.cookie);
```

The text before the equal sign is our key and after the equal sign is our value. We can set more cookies by using the same code. Notice that this does not overwrite any cookies that have been previously saved but just adds to the list.

```javascript
document.cookie = "javascript=cool";

console.log(document.cookie);
```

To override a cookie we just have to set a new one with the exact same key.

```javascript
document.cookie = "coderAcademy=super-awesome";

console.log(document.cookie);
```

Now there is one little gotcha here. There is no way for us to get the value of a single cookie. We only have access to the entire cookie string through document.cookie.

*Ask the class to write a function that takes in the name of a cookie and returns its value.*

```javascript
//one example

function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[name];
}
```

We can also give cookies expiration dates.

```javascript
let days = 2;
let expiry = new Date();
expiry.setTime(expiry.getTime() + (days * 24 * 60 * 60 * 1000)); //Converting days to milliseconds

document.cookie = `lang=english;expires=${expiry.toUTCString()};path=/`;
```

Cookies will be valid as long as the expiration date remains in the future. Do remove a cookie it is as simple as setting its expiration date to the past and its value to null.

```javascript
let expiry = new Date();
expiry.setTime(expiry.getTime() - 1);

document.cookie = `lang=;expires=${expiry.toUTCString()};path=/`;
```

*Ask the class to write a function that removes a cookie by its name.*

```javascript
function removeCookie(name) {
    let expiry = new Date();
    expiry.setTime(expiry.getTime() - 1);
    document.cookie = `${name}=;expires=${expiry.toUTCString()};path=/`;
}
```

One thing you may have noticed is that even though we think we are saving seperate cookies in actuality all of our cookies are just one big string located under document.cookie. A cookie document is allowed to have a max size of 4kb which means that each individual cookie doesn't have to be smaller than 4kb but the entire cookie document for that specific domain.

It is this size restriction, among other difficulties with cookies that leads us into our next topic.

**Web Storage**

*What are the problems with cookies?*

* Difficult to parse
* Limited in size
* Sent with every request to the server

In certain situations we may actually want this behaviour but if we are just wanting to store simple key/value pairs these limitation seem more of a hinderance than a good thing. In comes something called web storage to save the day.

Web storage has two different mechanisms.

* sessionStorage - available for the duration of the page session (as long as the browser is open, including page reloads and restores)
* localStorage - persists even when the browser is closed and reopened.

Lets check out web storage in action.

https://mdn.github.io/dom-examples/web-storage/

Now lets store some of our own values inside of web storage.

To set a value use **setItem(key, value)**.

```javascript
localStorage.setItem("name", "Garret");
sessionStorage.setItem("address", "123 Fake Street");
```

Lets see how localStorage and sessionStorage behave differently. If we refresh the browser and check the values.

```javascript
console.log(localStorage);
console.log(sessionStorage);
```

Now if we close our browser and reopen it back to the same HTML doc.

```javascript
console.log(localStorage);
console.log(sessionStorage);

//local storage is still holding our value
//session storage is empty
```

To remove an item from web storage we can use **removeItem()**.

```javascript
localStorage.setItem("age", "300");
console.log(localStorage);

localStorage.removeItem("age");
console.log(localStorage);
```

And finally to retrieve an items value we can use **getItem()**.

```javascript
localStorage.setItem("gender", "male");
let gender = localStorage.getItem("gender");

console.log(gender);
```

The benefits of web storage are:

* Never expires
* Not sent to the server on requests
* Size limit is 5MB

*Both cookies and web storage will have your data as strings so if we want to save objects or arrays?*

We can convert the data into JSON before saving.

```javascript
let person = {
    age: 25,
    gender: "male",
    name: "Bob"
};

localStorage.setItem("student", JSON.stringify(person));
console.log(localStorage.getItem("student"));
```

Now when we retrieve the value from our web storage we can just parse the JSON string back into an object.

```javascript
let personJSON = localStorage.getItem("student");
let personObject = JSON.parse(personJSON);

console.log(personObject);