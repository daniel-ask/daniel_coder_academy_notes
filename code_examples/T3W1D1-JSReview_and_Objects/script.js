function Electronic(name, brand) {
    this.name = name;
    this.brand = brand;
}

let macbookAir = new Electronic('Macbook Air','Apple');
console.log(macbookAir);

Electronic.designedIn = "California";
let iPhone = new Electronic("iPhone 12", 'Apple');

console.log(iPhone);
console.log(iPhone.constructor);

let object_3 = new Object();
console.log(object_3.constructor);

console.log(iPhone.__proto__);
console.log(Electronic.prototype);
Electronic.prototype.designedIn = 'China';

console.log(iPhone.designedIn);
