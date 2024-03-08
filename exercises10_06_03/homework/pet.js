class Pet {
    constructor() {
        this.name = '';
        this.talk = '';
    }
    introduce() {
        console.log(`Tôi tên là ${this.name}, kêu ${this.talk}`)
    }
}
class Dog extends Pet {
    constructor() {
        super();
        this.type = '';
    }
    animalType() {
        console.log(`Tôi là động vật loại ${this.type}`);
    }
}
let dog = new Dog();
dog.name = 'Ngáo';
dog.talk = 'Gâu Gâu';
dog.type = 'Husky';
dog.introduce();
dog.animalType();