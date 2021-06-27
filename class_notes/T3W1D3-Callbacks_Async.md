## Lesson Material

**Callbacks Intro**

A callback function is a function passed into another function as an argument which is then invoked inside of the function.

```javascript
function adder(x, y, callback) {
    answer = x + y;
    
    if (callback) {
        return callback(answer);
    }
    
    return answer;
}

function shoutSomething(input) {
    console.log(`${input}!`)
}

adder(1,2, shoutSomething);
```

This an an example of a synchronous callback since it is executed immediately.
However callbacks are often used for ansynchronous operations.

**Synchronous vs Asynchronous**

*What is synchronous code execution?*

Synchronous codes is also referred to as **blocking**, where asynchronous is also referred to as **non-nonblocking** code execution.

Blocking or Synchronous code is when code is executed in order and must finish before moving on to the next line of code.

We have all seen this within our programs so far and is the behaviour we are familiar with.

```javascript
function wait(ms) {
    let start = Date.now(),
    now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

wait(5000);

console.log("finished");
```

JavaScript itself is a single threaded language so in the traditional sense it is a blocking language.

```
One Thread == One Call Stack == One Thing At A Time
    - Philip Roberts
```

*So why do you think this is an issue?*

When we are running blocking code nothing else can be ran. Think about this in terms of the browser.
1. Its a bad user experience if a user has to sit and wait for each thing to load in sequence.
2. The browser wants to constantly render (every 6 milli seconds). If we are blocking that then nothing can re-render and looks like the browser has frozen.

*Run this code and look at how the button seems frozen during execution.*

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <button id="button">Click Me!</button>
    <script>
        function wait(ms) {
            let start = Date.now(),
            now = start;
            while (now - start < ms) {
                now = Date.now();
            }
        }

        document.getElementById("button").addEventListener("click", () => {
            wait(5000);
            alert("Ran!");
        });
    </script>
</body>
</html>
```

As you can see this is a very bad user experience and keeps us from doing else while we wait for our code to finish executing.

However we can make JavaScript act ansynchronously through the callback queue and event loop.

*What is Asynchronous code execution?*

Non-Blocking or Asynchronous code is when a line of code is executed and the program is able to move on before that line of code has finished.

*Just by reading the code what do you believe is going to print to the screen?*

```javascript
console.log(1);

setTimeout(() => {
    console.log(2);
}, 5000);

console.log(3);
```

So it looks like the code was able to continue to execute while it waited for the timeout to hit 5 seconds.

*If we modify the timeout to 0 seconds what do you believe the order printed to the screen will be?*

```javascript
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);
```

It was the same! Even though technically we didn't need to wait anytime at all before execution. To get a better understanding of what is going on we first need to look to the call stack.

**Call Stack**

*What is a call stack?*

The call stack is how JavaScript keeps track of the execution order of its code.
You can either push onto the call stack or pop off the top.

*Use this link to run code and visualise the call stack - https://bit.ly/1Btu0Iy*

Lets take a look at a basic example of the call stack.

```javascript
let a = 1;

function x () {
    return "here";
}

function y() {
    return x();
}

function z() {
    return y();
}

z();
```

As you could see as the code runs it is placed on the call stack. Once the code has finished executing it pops off the top.

*Rerun our wait example from earlier to see how that executes.*

Now lets see what happens when we run a piece of code that is asynchronous.

```javascript
//Note some code breaks the call stack visualisation utility.
//Run the below code so as not break it.

console.log("Hi!");

setTimeout(function timeout() {
    console.log("logic in the timeout");
}, 5000);

console.log("Continue to run");
```

As we saw the function was handed to something called Web APIs, then the callback queue, and it was then picked up by the event loop and finally put on stack to be executed.

Let's break down each of these concepts.

**Web APIs**

As mentioned earlier JavaScript is a single threaded programming language so it is blocking by nature but depending on where JavaScript is ran (such as the browser in this case) we have access to additional features outside of the JavaScript runtime that we can hand off code execution to so that it pops off the call stack. In this case we have access to Web APIs which is a feature specifically for the browser. In Node.js we have access to C++ to hand off execution of our code to so that it can become multi-threaded.

**Callback Queue**

Whenever code execution outside of the call stack has finished (in this case, when Web API's has finished) the callback is pushed into the callback queue, waiting to be put back in the call stack.

**Event Loop**

The event loop is constantly checking the call stack. Once the call stack is empty the event loop will check the callback queue. If there is a callback to process, the event loop will grab it from the callback queue and place it into the call stack for execution.

```javascript
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});
```

```javascript
console.log("1");

setTimeout(function timer() {
    console.log("3");
    
    setTimeout(function timer() {
        console.log("5");    
    }, 2000);
    
    console.log("4");
}, 2000);

console.log("2");
```

In this example console.log("2") still prints to the screen last because even though setTimeout does not technically take any time it is still pushed to the callback queue and cannot be processed until the stack is clear.

```javascript
console.log("1");

setTimeout(function timer() {
   console.log("2");
}, 0);

console.log("3");
```

**Callback Hell**

As we have seen when we run asynchronous code one way to continue executing code after the asynchronous call has finished is through the use of callbacks. At the moment we have only used setTimeout which is used in the real world but where we see callbacks used a lot in JavaScript is with event listeners and AJAX calls.

Now we are not going to go deep into event listeners and AJAX calls here (we will cover them in a future section) but just understand that these two asynchronous Web APIs allow us to listen for events in the DOM (a button click) or make a network/API call (AJAX).

Just to familiarise yourself with the basics here is what a basic event listener looks like. (We have already seen this used in a previous example)

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <button id="button">Click Me!</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            console.log("button clicked");
        });
    </script>
</body>
</html>
```

And for our AJAX call in this example we will use the JQuery library since it takes a callback instead of returning a promise like other modern AJAX libraries.

```
Send this file to the students on slack, we will be including this file in our example. 
So it will need to be in the same directory as our index.html file. 
Please note that this file is not the full JQuery library but only contains the AJAX functionality. 
```

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <script>
        $.get("https://api.chucknorris.io/jokes/random", (data) => {
            console.log(data);
        });
    </script>
</body>
</html>
```

Now the reason I am introducing these new concepts here instead of saving them for the future is that I want to give you a real world example of something known as **callback hell.**


*Ask the students to use these new concepts to create a button in html that when they click it will retrieve 5 jokes from the api and save those jokes into an array. Have that array log to the console.*

*How many of your solutions look like this?*

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            $.get("https://api.chucknorris.io/jokes/random", (joke1) => {
                $.get("https://api.chucknorris.io/jokes/random", (joke2) => {
                    $.get("https://api.chucknorris.io/jokes/random", (joke3) => {
                        $.get("https://api.chucknorris.io/jokes/random", (joke4) => {
                            $.get("https://api.chucknorris.io/jokes/random", (joke5) => {
                                let jokeArray = [joke1, joke2, joke3, joke4, joke5];
                                console.log(jokeArray);
                            });
                        });
                    });
                });    
            });
        });
    </script>
</body>
</html>
```

Welcome officially to callback hell.

When you get this pyramid looking shape with all of the }); at the end that is what is known as callback hell.

The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom. Lots of people make this mistake! 

Lets clean up this code so it looks a bit better.

```html
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        function compileJokes(num, callback, arr = []) {
            let url = "https://api.chucknorris.io/jokes/random";
            $.get(url, (data) => {
                arr.push(data.value);
                if (num === arr.length) {
                    return callback(arr);
                }
                return compileJokes(num, callback, arr);
            });
        }
        document.querySelector("#button").addEventListener("click", () => {
            compileJokes(5, (data) => {
                console.log(data);
            });
        });
</script>
</body>
</html>
```

A good tip to help avoid callback hell is to keep your code shallow.

Lets look at an example of this.

```javascript
//Callback Hell

function addAndThenHalveAtSomePoint(a, b, callback) {
setTimeout(function() {
let answer = a + b;
setTimeout(function() {
answer = answer / 2;
return callback(answer);
}, 3000);
}, 2000);
}

//Shallow Code
function addAndThenHalveAtSomepoint(a, b, callback) {
    return addAtSomePoint(halveAtSomePoint(callback))(a, b);
}

function addAtSomePoint(callback) {
    return function (a, b) {
        setTimeout(function() {
            let answer = a + b;
            return callback(answer);
        }, 1000);
    }
}

function halveAtSomePoint(callback) {
    return function(a) {
        setTimeout(function() {
            let answer = a / 2;
            return callback(answer);
        }, 1000);
    }
}

addAndThenHalveAtSomepoint(10, 20, function(answer) {
    console.log(answer);
});
```
## Lesson Material


**Promises**

So we have looked at callbacks and how they are necessary in our code especially when doing anything asynchronous but we also experience a limitation to callbacks and how we could wind up in callback hell. 

Remember this.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            $.get("https://api.chucknorris.io/jokes/random", (joke1) => {
                $.get("https://api.chucknorris.io/jokes/random", (joke2) => {
                    $.get("https://api.chucknorris.io/jokes/random", (joke3) => {
                        $.get("https://api.chucknorris.io/jokes/random", (joke4) => {
                            $.get("https://api.chucknorris.io/jokes/random", (joke5) => {
                                let jokeArray = [joke1, joke2, joke3, joke4, joke5];
                                console.log(jokeArray);
                            });
                        });
                    });
                });    
            });
        });
    </script>
</body>
</html>
```

Well the JavaScript community also realised the limitations to callbacks and thus promises were born.

Let create our first promise.

```javascript
let ourPromise = new Promise((resolve, reject) => {

});
```

All done. Now this promise doesn't do anything but this is the basic for what any promise needs to be valid. 

1. **new Promise()** - This connects us to the Promise API and allows us to begin defining our promise.
2. **Promise resolver function** - This function is where we can put our logic to determine whether of not the promise has finished and if it has finished successfully.

A promise can have 3 different states.

* **pending** - initial state, neither fulfilled nor rejected.
* **fulfilled** - meaning that the operation completed successfully.
* **rejected** - meaning that the operation failed.

When a promise is fulfilled we call resolve(), but if a promise encounters and error we call reject().

A promise is also asynchronous so it is removed from the call stack while it processes and brought back onto the call stack by the event loop once the call stack is clear.

Lets take a look at an example of this.

```javascript
let x = 2;
let y = 5;

let calculation = new Promise((resolve, reject) => {
    let answer = x + y;

    if (isNaN(answer)) {
        reject("Input needs to be a number");
    }

    resolve(answer);
});

calculation
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    });

console.log(1);

//Change the value of x or y a couple of times and refresh the app.
```

We can see that we use reject() for the error and resolve() when we are successful. Also notice that we do not return anything from the Promise Resolver Function, instead we simply call reject() or resolve().

There are a couple new concepts in the above code as well. We have a then() and a catch() statement. Then is called when a promises resolves successfully and catch is called when a promise is rejected.

Now the example doesn't look too useful at the moment but it gets more useful when we add another layer of abstraction. I am talking about a function that returns a promise.

*Have the class refactor the code so that the promise is returned from a function named adder.*

```javascript
function adder(x, y) {
    return new Promise((resolve, reject) => {
        let answer = x + y;

        if (isNaN(answer)) {
            reject(new Error("Input needs to be a number"));
        }

        resolve(answer);
    });
}

adder(2,5)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    });

console.log(1);
```

This is a lot better because now whenever we call adder() it returns our promise.

*With our new refactored code have the class call adder 3 times. Each time taking the previous answer as the first input for the next call.*

This should lead into something that looks a lot like callback hell.

```javascript
adder(2,5)
    .then(answer1 => {
        adder(answer1, 2)
            .then(answer2 => {
                adder(answer2, 9)
                    .then(answer3 => {
                        console.log(answer3);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err)
    });
```

*Wait did we just enter promise hell?*

It is very easy to fall into the same trappings with promises as we did with callbacks. To help us avoid this promises allows us to chain them together. What I mean is that as long as a promise is returned then a new promise may be chained on.

Lets clean up our code using promise chaining.

```javascript
adder(2,5)
    .then(answer1 => {
        return adder(answer1, 2);
    })
    .then(answer2 => {
        return adder(answer2, 9);
    })
    .then(answer3 => {
        console.log(answer3);
    })
    .catch(err => {
        console.log(err)
    });
```

This looks a lot nicer. We were able to chain together all of our promises and still use a single catch statement to handle an error that comes up from any of our promise calls. Catch in promises works exactly like try / catch does plus a little bit more. If an error is thrown anywhere in the promise or its callback function the catch statement will handle that error. 

```javascript
adder(2,5)
    .then(answer1 => {
        return adder(answer1, 2);
    })
    .then(answer2 => {
        throw new Error("oops something went wrong");
        return adder(answer2, 9);
    })
    .then(answer3 => {
        console.log(answer3);
    })
    .catch(err => {
        console.log(err)
    });
```

The catch statement will also be called if a promise does not resolve but instead calls reject.

```javascript
adder(2,5)
    .then(answer1 => {
        return adder(answer1, 2);
    })
    .then(answer2 => {
        return adder(answer2, "piece of text");
    })
    .then(answer3 => {
        console.log(answer3);
    })
    .catch(err => {
        console.log(err)
    });
```

**Promise Scope**

There is still one inconvenient thing about promises that sometimes forces us into promise hell. And that is the the scope of a promises return value while using chaining. Lets do another example.

*Ask the class to create a function that returns a promise. This function will be name subtractor and subtracts any number or arguments given (number unknown) and returns the answer.*

```javascript
function subtractor() {
    let subArgs = arguments;

    return new Promise((resolve, reject) => {
        let answer = subArgs[0] || 0;
        for(let i = 1; i < subArgs.length; i++) {
            answer -= subArgs[i];
        }
        if (isNaN(answer)) {
            console.log(subArgs);
            reject(new Error("All inputs must be a number"));
        }
        resolve(answer);  
    });
}
```

Now lets use our function to create some logic where we always use the return value as the next value in our subtractor call. We will do this three times.

```javascript
subtractor(100, 10)
    .then(answer1 => {
        return subtractor(100, 10, answer1);
    })
    .then(answer2 => {
        return subtractor(100, 10, answer1, answer2);
    })
    .then(answer3 => {
        console.log(answer3);
    })
    .catch(err => console.log(err));
```

Uh oh! We get a **ReferenceError** saying that answer1 is not defined when we try to use in the the second then statement. If we use promise chaining the return value from the promise used in our callback is not made available further down the chain! So in this scenario if we wanted access to return values from a promise in a subsequent promise we would have to modify our code to be like this.

```javascript
subtractor(100, 10)
    .then(answer1 => {
        subtractor(100, 10, answer1)
            .then(answer2 => {
                subtractor(100, 10, answer1, answer2)
                    .then(answer3 => {
                        console.log(answer3);
                    })
            })
    })
    .catch(err => console.log(err));
```

Oh no we are back in promise hell! This works because of function scope that we have talked about in an earlier lesson. Variables in parent functions are made available to their children. So even though promises do make our lives easier and our code cleaner, in certain situations it may not be the best choice either. But lets not start hating on promises. They still have some amazing features we haven't talked about.

**Promise.all()**

Once again we welcome you to callback hell from our jokes example.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            $.get("https://api.chucknorris.io/jokes/random", (joke1) => {
                $.get("https://api.chucknorris.io/jokes/random", (joke2) => {
                    $.get("https://api.chucknorris.io/jokes/random", (joke3) => {
                        $.get("https://api.chucknorris.io/jokes/random", (joke4) => {
                            $.get("https://api.chucknorris.io/jokes/random", (joke5) => {
                                let jokeArray = [joke1, joke2, joke3, joke4, joke5];
                                console.log(jokeArray);
                            });
                        });
                    });
                });    
            });
        });
    </script>
</body>
</html>
```

*Ask the students to rewrite this code using promises.*

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        function getJoke() {
            return new Promise((resolve, reject) => {
                $.get("https://api.chucknorris.io/jokes/random", joke => {
                    if (joke.value) {
                        resolve(joke.value);
                    }

                    reject(new Error("Could not retrieve joke"));
                });
            });
        }

        document.querySelector("#button").addEventListener("click", () => {
            let jokes = [];

            getJoke()
            .then(joke => {
                jokes.push(joke);
                return getJoke();
            })
            .then(joke => {
                jokes.push(joke);
                return getJoke();
            })
            .then(joke => {
                jokes.push(joke);
                return getJoke();
            })
            .then(joke => {
                jokes.push(joke);
                return getJoke();
            })
            .then(joke => {
                jokes.push(joke);
                console.log(jokes);
            })
            .catch(err => console.log(err));
        });
    </script>
</body>
</html>
```

Ok this is looking a little better but it is still so slow! We have to wait on one joke to be retrieved before we move on to getting the next joke. 

*Ask the students, forgetting about the code itself, logically how could we speed things up?*

To speed things up we could send out all 5 requests a once and handle the responses once they were all done. That way everything is processing concurrently instead of waiting for each step to be done before moving on to the next.

Well good news! Promises just so happens to have this feature and it is called **Promise.all()**.

Promise.all() takes an array of promises and once all the promises have resolved will run our callback function. Sticking with the jokes example it would look like this.

```html
<!DOCTYPE html>
<html>
<head>
    <script src="jquery.min.js" type="text/javascript"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        function getJoke() {
            return new Promise((resolve, reject) => {
                $.get("https://api.chucknorris.io/jokes/random", joke => {
                    if (joke.value) {
                        resolve(joke.value);
                    }

                    reject(new Error("Could not retrieve joke"));
                });
            });
        }

        document.querySelector("#button").addEventListener("click", () => {
            let jokePromises = [
                getJoke(),
                getJoke(),
                getJoke(),
                getJoke(),
                getJoke()
            ];

            Promise.all(jokePromises)
                .then(jokes => console.log(jokes)) 
                .catch(err => console.log(err));
        });
    </script>
</body>
</html>
```

Wow! That was so much faster. Instead of waiting for a request to finish before moving on to the next we don't handle the responses until all the requests are done.

Promise.all() returns an array of the responses of all your resolved promises. The returned array of responses is in the same order as the promises you passed it.

```javascript
function multiplier(x, y) {
    let randomNumber = (Math.random * 10) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let answer = x * y;

            if (isNaN(answer)) {
                reject(new Error("Input needs to be a number"));
            }

            resolve(answer);
        }, randomNumber * 1000);
    });
}

let promises = [
    multiplier(3,6),
    multiplier(2,4),
    multiplier(5, 10)
];

Promise.all(promises)
    .then(answers => console.log(answers))
    .catch(err => console.log(err));
One tricky thing about Promise.all() though is that if even 1 promises is rejected then the catch statement will run.
let promises = [
    multiplier(3,6),
    multiplier(2, "string"),
    multiplier(5, 10)
];
Promise.all(promises)
    .then(answers => console.log(answers))
    .catch(err => console.log(err));
```

**Promise.race()**

Promise.race() is a lot like promise.all() structurally. You pass promise.race() an array of promises just like promise.all(). However the big difference is that promise.race() will return only a single response. That response if the first promise to either be resolved or rejected. So truly as it's name implies it is race to see which one gets done first.

```javascript
function divider(x, y, secs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let answer = x / y;

            if (isNaN(answer)) {
                reject(new Error("Input needs to be a number"));
            }

            resolve(`Winner is ${answer} at ${secs} seconds`);
        }, secs * 1000);
    });
}

let promises = [
    divider(4, 2, 5),
    divider(10, 3, 3),
    divider(6, 6, 1)
]

Promise.race(promises)
    .then(response => console.log(response))
    .catch(err => console.log(err));
```
