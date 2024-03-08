function callBack(arr, callback) {
    const Sochan = [];
    const Sole = [];

    arr.forEach(num => {
        if (callback(num)) {
            Sochan.push(num);
        } else {
            Sole.push(num);
        }
    });

    return { Sochan, Sole };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = callBack(numbers, num => num % 2 === 0);

console.log("Số chẵn:", result.Sochan);
console.log("Số lẻ:", result.Sole);
