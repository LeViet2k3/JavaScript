const employees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 }
]
// function findEmp(name) {
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].name === name) {
//             return employees[i].age;
//         }
//     }
// }
const name = "Emp A";
// emp = findEmp(name);
emp = employees.find(item => item.name === name).age
console.log(emp)