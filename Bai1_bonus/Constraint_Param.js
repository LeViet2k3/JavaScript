// function sample(parma1) {
//     if (parma1 === undefined) {
//         throw new console.error('Thieu tham so! ');
//     }
//     return parma1;
// }

mandatory = () => {
    throw new console.error('Thieu tham so! ');
}
sample = (parma1 = mandatory()) => parma1

const result = sample(2);
console.log(`Ket qua cua ham nhap vao: ${result}`);