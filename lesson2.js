'use strict'

let user = {};
console.log(user)

user.name = 'ПИЛИП'
user.surname = 'ШЕВЧЕНКО'
console.log(user)

user.name = 'СЕРГІЙ'
console.log(user)

delete user.name
console.log(user)

console.log('\n')

let employeeSalaries = {
    'Дмитро': 500,
    'Андрій': 900,
    'Микола': 1200
};

for (let key in employeeSalaries) {
    console.log('Працівник: ' + key + ', зарплата: ' + employeeSalaries[key] + '$');
}
console.log('\n')

function sumSalaries(employeeSalaries) {
    let sum = 0
    for (let salary of Object.values(employeeSalaries)) {
        sum += salary
    }
    return sum
}
console.log('Сума зарплат: ' + sumSalaries(employeeSalaries) + '$')