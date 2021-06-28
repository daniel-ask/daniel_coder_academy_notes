console.log(document);
console.log(typeof document);
console.log(document.__proto__);

window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = 'RESIZING';
});

const divTag = document.createElement('div');
console.log(divTag);
document.body.appendChild(divTag);

divTag.innerHTML = 'HELLO';

const paragraph = document.createTextNode('THIS IS A TEXT NODE');


const newMain = document.createElement('main');
newMain.appendChild(paragraph);

document.body.insertBefore(newMain, divTag);
divTag.remove();

document.body.replaceChild(divTag,newMain);

const listItems = document.getElementsByTagName('li');

listItems[1].innerHTML = 'First li?'

const listItemsNodes = document.querySelectorAll('li');
console.log(listItemsNodes);
listItemsNodes[0].innerHTML = 'test';

console.log(window.innerHeight);
console.log(window.innerWidth);
window.open() //- open a new window
// window.close() //- close the current window
// window.moveTo() //- move the current window
// window.resizeTo() //- resize the current window


/*

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling

*/

/*

An HTMLCollection (previous chapter) is a collection of HTML elements.

A NodeList is a collection of document nodes.

*/

const heroes = {
	dc: [
		'Batman',
		'Superman'
	],
	marvel: [
		'Iron Man',
		'Dr. Strange'
	]
};

function ChangeHeroesList() {
  const companyList = document.getElementById("comicBrand");
  const heroesList = document.getElementById("heroes");
	heroesList.disabled = false;
  const selectedCompany = companyList.options[companyList.selectedIndex].value;
	console.log(selectedCompany);
  while (heroesList.options.length) {
    heroesList.remove(0);
  }
  const heroesOf = heroes[selectedCompany];
  if (heroesOf) {
    for (let hero of heroesOf) {
      let anotherHero = new Option(hero);
      heroesList.options.add(anotherHero);
    }
  }
} 

exports = {ChangeHeroesList}