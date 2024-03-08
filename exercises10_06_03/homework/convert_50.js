class Car {
    constructor() {
        this.speed = 0;
    }

    printSpeed() {
        console.log(this.speed);
    }
}

var car = new Car();
car.instanceMethod = function () {
    console.log("An instance method");
};
car.speed = 50;
car.printSpeed(); // Output : 50
car.instanceMethod(); // Output : An instance method

class Cabriolet extends Car {
    constructor() {
        super();
        this.topState = 'closed';
    }

    openTop() {
        this.topState = 'opened';
        console.log(`Top: ${this.topState}`);
    }

    closeTop() {
        this.topState = 'closed';
        console.log(`Top: ${this.topState}`);
    }
}

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet {
    constructor() {
        super();
        this.name = 'Tesla http://www.teslamotos.com/roadster';
    }

    sayName() {
        console.log(this.name);
    }
}

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
