function Electronic(name, brand){
	this.name = name;
	this.brand = brand;
	// this.toString = function(){
	// 	return `${this.brand}: ${this.name}`
	// }
}

Electronic.prototype.stock = 0;
Electronic.prototype.toString = function() {
	return `${this.brand} ${this.name}: ${this.stock} left in stock`
}

function Computer(name, brand, ram, cpu, screen){
	Electronic.call(this, name, brand);
	this.ram = ram;
	this.cpu = cpu;
	this.screen = screen;
}


Computer.prototype = Object.create(Electronic.prototype);

Computer.prototype.spec = function() {
    console.log(`Cpu: ${this.cpu}\nRAM: ${this.ram}\nScreen: ${this.screen}`)
}

function Phone(name, brand, storage, model) {
    Electronic.call(this, name, brand);
    this.storage = storage;
    this.model = model;
}

Phone.prototype = Object.create(Electronic.prototype);

Phone.prototype.spec = function() {
    console.log(`Storage: ${this.storage}\nModel Name: ${this.model}`)
}

module.exports = { Electronic, Computer, Phone }

