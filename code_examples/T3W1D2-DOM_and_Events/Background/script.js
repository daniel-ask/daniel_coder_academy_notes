const button = document.querySelector('#change-background');

function getColour(){
	return (Math.random() * 255).toFixed(); 
}
console.log(getColour())
button.addEventListener('click', () => {
	const randomColour = `rgb(${getColour()}, ${getColour()}, ${getColour()})`;
	document.body.style.backgroundColor = randomColour;
	button.innerHTML = randomColour;
});

