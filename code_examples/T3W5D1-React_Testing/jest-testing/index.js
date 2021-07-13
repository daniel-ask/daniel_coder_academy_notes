function multiplication(num1, num2){
	return num1 * num2;
}

function tax(value, taxPercentage){
	return '$' + multiplication(value,taxPercentage)
}

module.exports = { 
	multiplication,
	tax
};