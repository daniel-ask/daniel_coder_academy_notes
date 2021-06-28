function getUserData() {
  console.log("starting request");

  let request = new XMLHttpRequest();
  request.open("GET", "https://randomuser.me/api/", true);
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

let request = new XMLHttpRequest();
request.open("GET", "https://randomuser.me/api/", true);
console.log(request)
request.onload = () => {
	// console.log(request.status);
	// console.log(request.responseText);
	const data = JSON.parse(request.responseText)
	// console.log(data.results[0].email);
}
request.send();




const fetchRequest = fetch('https://pokeapi.co/api/v2/pokemon/1')
console.log(fetchRequest)
fetchRequest.then(response => response.json()).then(data => console.log(data))

fetch('https://icanhazdadjoke.com/'
, {
	headers: {
		"Accept": 'application/json'
	}
}
).then((response) => response.text()).then((data) => console.log(data));

// fetch('http://randomuser.me/api')
// 	.then(response => res.json())
// 	.then(data => console.log(data))

async function getPokemon(){
	const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon/1')
	const pokemonData2 = await pokemonData.json();
	console.log(pokemonData2);
}

document.querySelector("#button").addEventListener('click',getPokemon);