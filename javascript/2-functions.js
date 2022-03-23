function hello() {
    return "Olá!"
}
console.log(hello());

function helloPerson(name) {
    return `Olá ${name}!`
}
console.log(helloPerson("João"));


// Arrow functions
const hello2 = () => {
    return `Olá novamente!`
}
console.log(hello2());

const helloPerson2 = name => {
    return `Olá novamente ${name}!`
}
console.log(helloPerson2("João"));

const helloPerson3 = (name, age) => {
    return `Olá novamente ${name}, sua idade é ${age}!`
}
console.log(helloPerson3("João", 25));

const helloPerson4 = name => `Olá outra vez ${name}!`
console.log(helloPerson4("João"));