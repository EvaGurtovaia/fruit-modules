import food from "./food";
import { choice, remove } from "./helpers.js";

let choosed = choice(food);
console.log(`I’d like one ${choosed} please.`);
console.log(`Here you go: ${choosed}`);
console.log(" “Delicious! May I have another?”");
let left = remove(food, choosed);
console.log(`I’m sorry, we’re all out. We have ${left.length} left.`);
