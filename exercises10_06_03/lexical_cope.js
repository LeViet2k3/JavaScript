var myFunction = function () {
    var name = 'van viet';
    var myOtherFunction = function () {
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
}
myFunction();

function fOuter() {
    var x = "Hello";
    function fInner() {
        x = "World";
    }
    fInner();
    return x;
}
console.log(fOuter());