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

function calculator(val1, val2, operation) {
    try {

        if (typeof val1 === "number" && typeof val2 === "number") {
            switch (operation) {
                case "+":
                    return val1 + val2;
                    break;
                case "*":
                    return val1 * val2;
                    break;
                case "-":
                    return val1 - val2;
                    break;
                case "/":
                    return val1 / val2;
                    break;
                default:
                    console.log("Something went wrong");
            }
        } else {
            throw new Error('Error!')
        }

    } catch (err) {
        console.log(err)
    }

}

console.log(calculator('ff', 6, "+"))
console.log(calculator(5, 4, "*"))