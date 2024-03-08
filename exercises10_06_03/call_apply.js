var person1 = { name: 'Van Viet', age: 19 };
var person2 = { name: 'Le Viet', age: 20 };
var sayHello = function () { console.log('Hello, ' + this.name); };
var sayGoodbye = function () { console.log('Goodbye, ' + this.name); };


sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);