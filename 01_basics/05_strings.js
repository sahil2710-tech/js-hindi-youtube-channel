const name = "raj"
const repoCount = 50

//  console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('raj-singh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(2, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 2)
console.log(anotherString);

const newStringOne ="     Raj     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raj.com/raj%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('sahil'))

console.log(gameName.split('-'));
