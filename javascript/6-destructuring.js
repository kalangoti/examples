const fruits = ["orange", "banana", "grape"];

let [fruit1, , fruit3] = fruits;

console.log(fruit1);
console.log(fruit3);

const person = {
  name: "João",
  age: 20,
  country: "Brazil",
  language: "Portuguese",
};

let { age, language } = person;

console.log(age);
console.log(language);

const localidade = ({ country, language }) =>
  `Você mora no ${country} e fala ${language}`;

console.log(localidade(person));
