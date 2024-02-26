const odd = [1, 3, 5];
// const nums = [2, 4, 6].concat(odd);
const nums = [2, 4, 6, ...odd];
// const arr = odd.slice(0, 2);
const arr = [...odd];
console.log(nums);
console.log(arr);