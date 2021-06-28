let calculateValue = function(Base){
	return class extends Base{
		value(){
			return this.stock * this.price;
		}
	}
}


class Electronic {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  toString() {
    return `${this.brand} ${this.name}: ${this.stock} left in stock`;
  }

  static staticFunction() {
    return "I am electronic";
  }
}

Electronic.prototype.stock = 10;
Electronic.staticFunction();

class Computer extends calculateValue(Electronic) {
  constructor(name, brand, price, ram, cpu, screen) {
    super(name, brand, price);
    this.ram = ram;
    this.cpu = cpu;
    this.screen = screen;
  }
}

class Phone extends calculateValue(Electronic) {
  constructor(name, brand, price, storage, model) {
    super(name, brand, price);
    this.storage = storage;
    this.model = model;
  }
}

module.exports = { Electronic, Computer, Phone, calculateValue }