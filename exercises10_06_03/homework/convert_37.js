class Constructor {
    constructor(val) {
        this.properties_2 = 'bubble';
        this.properties_3 = val;
    }
}

var obj = new Constructor('bub');
console.log(obj.properties_3);
