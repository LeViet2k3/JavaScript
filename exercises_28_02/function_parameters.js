function plusAll() {
    var res = 0;
    for (var i in arguments) {
        res += arguments[i];
    }
    return res
}
console.log(plusAll(1));
console.log(plusAll(2, 3, 5));

function func1(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1, 2, 3)


var person1 = { name: 'Van Viet', age: 19 };
var person2 = { name: 'Le Viet', age: 20 };
var sayHello = function () { alert('Hello, ' + this.name); };
var sayGoodbye = function () { alert('Goodbye, ' + this.name); };

sayHello();
sayGoodbye();
