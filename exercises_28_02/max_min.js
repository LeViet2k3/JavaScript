array = [2, 3, 4, 5]
array.forEach(nums => {
    max = array[0];
    min = array[0];
    (nums > max) ? max = nums : max = max;
    (nums < min) ? min = nums : min = min;
});
console.log(max, min)