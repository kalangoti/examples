// ----------- spread -----------

const numbers = [1, 2, 3, 4];

// copia por referencia
// const newNumbers = numbers;
// newNumbers.push(5);

// com spread
const newNumbers = [...numbers, 5];

console.log(numbers);
console.log(newNumbers);

// -----------

const rex = {
  name: "Rex",
};

const max = { ...rex, age: 2, family: "Carnívoros" };
max.name = "Max";

console.log(rex);
console.log(max);

// ----------- rest -----------

const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(sum(2, 3, 4, 250));
