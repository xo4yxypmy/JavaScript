const cars = ['Mazda', 'Porsche', 'BMW', 'VW']
cars.push('Mercedes')
cars.unshift('Lada')
console.log(cars)

cars.reverse()
console.log(cars)

const firsCar = cars.shift()
const lastCar = cars.pop()
console.log('First car:', firsCar + ', last car:', lastCar)
console.log(cars)
const index = cars.indexOf('BMW')
console.log(index)

console.log('\n');

const text = 'Hallo, ich lerne JavaScript'
console.log(text)

const reverseText = text.split('').reverse().join('')
console.log(reverseText)

console.log('\n');

const people = [
    { name: 'Andrew', cash: 4000 },
    { name: 'Robert', cash: 3500 },
    { name: 'Elena', cash: 4200 }
]
console.log(people)

const indexPeople = people.findIndex(function(person) {
    return person.cash === 3500
})
console.log(indexPeople);

const person = people.find(function(person) {
    return person.cash === 4200
})
console.log(person);

const person1 = people.find(person => person.cash === 4000)
console.log(person1);

console.log('\n');

const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
console.log(fib)
console.log(pow2Fib)

const filterNumbers = pow2Fib.filter(num => num > 20)
console.log(filterNumbers)

const allCash = people
    .filter(person => person.cash > 3600)
    .reduce((acc, person) => {
        acc += person.cash
        return acc
    }, 0)
console.log(allCash)