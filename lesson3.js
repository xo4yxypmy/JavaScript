const products = ['Apfel', 'Melone', 'Wassermelone', 'Kohl', 'Erdbeere', 'Mango', 'Paprika', 'Kartofel']
console.log(products);
console.log(products.length);
let lastProduct = products.length - 1
console.log(products[lastProduct]);

console.log('\n');

const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-Ролл')
console.log(styles);
let addNewStyle = styles.length - 2;
styles[addNewStyle] = 'Класика'
console.log(styles)

const remoteValue = styles.shift();
console.log(remoteValue)
styles.unshift('Реп', 'Реггі')
console.log(styles)

const people = [
    { name: 'John', cash: 5000 },
    { name: 'Anna', cash: 3600 },
    { name: 'Winston', cash: 7000 },
    { name: 'Peter', cash: 4500 }
]

const indexPerson = people.findIndex(function(indexPerson) {
    return indexPerson.cash === 6000
})
console.log(indexPerson)

const numbers = [1, 2, 4, 90, 55, 30, 5, 1, 8, 5, 34, 26, 22, 49, 67]

function filterRange(numbers, min, max) {
    let resultArray = []
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] >= min && numbers[i] <= max) {
            resultArray.push(numbers[i])
        }
    }
    return resultArray
}
console.log(filterRange(numbers, 5, 54))

const text = 'my-short-string'
const camelize = text.split('-').map((w, i) => i ? (w = w.split(''), w.shift().toUpperCase() + w.join('')) : w).join('')
console.log(camelize)