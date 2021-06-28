let x = 2;
let y = 5;

let newPromise = new Promise((resolve, reject) => {
  let answer = x + y;

  if (isNaN(answer)) {
    reject("WRONG");
  }

  //comment this to see it never resolve
  resolve(answer);
});

function adder(x, y) {
  return new Promise((resolve, reject) => {
    let answer = x + y;

    if (isNaN(answer)) {
      reject("WRONG");
    }

    //comment this to see it never resolve
    resolve(answer);
  });
}

adder(5, 9)
  .then((data) => console.log(data))
  .catch((err) => alert(err));

//Three states

// pending

// fulfilled

// rejected
console.log(ourPromise);

ourPromise.then(
  (data) => console.log(data),
  (err) => alert("OOPS")
);

// JAVASCRIPT IGNORED WHITE spaces

// promise hell

adder(5, 9)
  .then((data) =>
    adder(data, 20).then((data) =>
      adder(data, 3).then((data) => console.log(data))
    )
  )
  .catch((err) => alert(err));

adder(5, 9)
  .then((data) => adder(data, 20))
  .then((data) => adder(data, 3))
  .then((data) => console.log(data))
  .catch((err) => alert(err));

// using the catch will catch all error in all thens

function getPokemon(num) {
  return new Promise((resolve, reject) => {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${num}`, (data) => {
      if ((data, joke)) {
        resolve(data.joke);
      }

      reject(new Error("Could not retrieve joke!"));
    });
  });
}

const pokemonList = document.querySelector("ol");

getPokemon(1).then((data) => {
  pokemonList.innerHTML += `<p>${data.name}</p>`;
  return getPokemon(2);
});


const pokemonPromises = []

Promise.all(pokemonPromises).then((pokemons) => {
	pokemons.forEach((value, index) => {
		document.querySelector('ol').innerHTML += `<p>${value.name}</p>`;
	})
}).catch((err) => alert(err));


// returns the fastest request
// Promise.any

// fetch 

fetch('https://pokeapi.co/api/v2/pokemon/1', {
	headers: {
		"Accept": 'application/json'
	}
}).then((data) => data.json()).then((data) => console.log(data));

fetch('http://randomuser.me/api')
	.then(response => res.json())
	.then(data => console.log(data))