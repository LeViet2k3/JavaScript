var student = {
    name: 'Le Van Viet',
    getName: function () {
        console.log(this.name)
        return this.name;
    }
};
var _deStudent = student.getName();