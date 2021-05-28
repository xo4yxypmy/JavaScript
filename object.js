const person = {
    name: 'Valentyn',
    lastName: 'Kovalyk',
    age: 22,
    languages: ['ua', 'ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed  Key',
    greet() {
        console.log('greet from person')
    }
}

console.log(person.name);
console.log(person['age']);
const ageKey = 'age'
console.log(person[ageKey]);
console.log(person['complex key']);

person.age++
    person.languages.push('pl')
person.greet()
console.log(person);
delete person['key_4']

const { name, age, languages } = person
console.log(name, age, languages);

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

Object.keys(person).forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})