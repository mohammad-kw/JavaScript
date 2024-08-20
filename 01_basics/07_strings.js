// const name = "Mohammad"
// const age = 21

// // old syntax
// // dont use this syntax
// console.log(name + " and " + age );

// // new syntax
// console.log(`My name is ${name} and my age is ${age}`);

// // another way of creating a string
// const gameName = new String('Saifee');

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('f'));

// // we can not give negative values
// const newString = gameName.substring(0, 4)
// console.log(newString);

// // we can give negative values, so it will starts from the back part (reverse)
// const anotherString = gameName.slice(-5, 3)
// console.log(anotherString);

// const newString1 = "    mohammad       "
// console.log(newString1);
// console.log(newString1.trim());

const url = "https//localhost2000/mohammad/saifee%20ms"
console.log(url.replace('%20', '-'));

console.log(url.includes('ms'))
console.log(url.includes('sm'));


const newString2 = "mohammad-saifee-ms"
console.log(newString2.split('-'));

const newString3 = " mohammad saifee ms "
console.log(newString3.split(' '));


