var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () => {
        console.log(text);
    }
}
sayBye('Me');// vì return trả về 1 hàm
var calledMe = sayBye('Me');
calledMe();