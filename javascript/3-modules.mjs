import person from "./modules/person.mjs";
import p from "./modules/person.mjs";
import { hello, sum } from "./modules/util.mjs";

console.log(person);

console.log(p);

console.log(hello(p.name));

console.log(sum(3, 4));
