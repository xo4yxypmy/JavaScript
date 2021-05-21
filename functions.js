function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42));
console.log('\n');

function calculator(val1, val2, operation) {
    if (typeof val1 === 'number' && typeof val2 === 'number') {
        switch (operation) {
            case '+':
                return val1 + val2;
                break;
            case '-':
                return val1 - val2;
                break;
            case '*':
                return val1 * val2;
                break;
            case "/":
                return val1 / val2;
                break;
            default:
                console.log('Someting went wrong');
        }
    } else {
        console.log('You can write only numbers')
    }
}

console.log(calculator(200, 50, '*'))
console.log(calculator(200, 50, '/'))
console.log(calculator(200, 50, '+'))
console.log(calculator(200, 50, '-'))
console.log('\n');

const employee = (name, lastName, age) => {
    console.log('Hallo', name, lastName, 'du bist', age, 'Jahre alt.')
}
employee('Hans', 'Zimmer', 67);
employee('Beata', 'Müller', 25);

const arrow = num => num ** 5;
console.log(arrow(8));

const sum = (a = 5, b = 25) => a * b;
console.log(sum());
console.log(sum(2, 9));

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(2, 10, 5, 8, 9, 12, 4);
console.log(res);