// callback

function callBackExample(x, callback = (x) => console.log(x)) {
  callback(x);
}

callBackExample(5, (x) => console.log(x));

callBackExample(5, (x) => console.log(x + 10));

callBackExample(5);

// similar yield in ruby

// Sync and Async

// Sync is synchronous code and is also known as blocking code

// Async is asynchronous code and is also know as non blocking code

// Async example

setTimeout(() => console.log("this is asynchronous"), 1000);

// User do not like waiting anything more than 3 seconds they are gone

//This is the main use of a callback as we can now pass functionality through functions with callbacks

// Using Jquery to show callback hell
const pokemonList = document.querySelector("ol");
for (let i = 1; i <= 5; i++) {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (data) => {
    console.log(data.name);
    pokemonList.innerHTML += `<p>${i} ${data.name}</p>`;
  });
}

$.getJSON(`https://pokeapi.co/api/v2/pokemon/1`, (data) => {
  pokemonList.innerHTML += `<p>1 ${data.name}</p>`;
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/2`, (data) => {
    pokemonList.innerHTML += `<p>2 ${data.name}</p>`;
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/3`, (data) => {
      pokemonList.innerHTML += `<p>3 ${data.name}</p>`;
      $.getJSON(`https://pokeapi.co/api/v2/pokemon/4`, (data) => {
        pokemonList.innerHTML += `<p>4 ${data.name}</p>`;
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/5`, (data) => {
          pokemonList.innerHTML += `<p>5 ${data.name}</p>`;
        });
      });
    });
  });
});


// THIS IS BAD



