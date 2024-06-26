person = {name: 'John', email: 'john@example.com '}

shallowCopy = {...person}

console.log(shallowCopy)

deepCopy = JSON.parse(JSON.stringify(person))

console.log(deepCopy)

shallowCopy.name = 'harry'

console.log(shallowCopy)
console.log(person)