let calculatorMixin = function (Base) {
    return class extends Base {
        area() {
            return this.width * this.height;
        }
    }
}

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    talk(input) {
        return `Hey I am a talking ${input}`;
    }
}

class Square extends calculatorMixin(Shape) {
    constructor(height, width) {
        super(height, width);
    }

    talk() {
        return super.talk("square");
    }
}

let square = new Square(10, 10);

console.log(square.talk());
console.log(square.area());