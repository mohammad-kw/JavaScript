

// -----------------for of loop---------------------

// in for-of loops we get the values

// most of the time we will use for-of loop for arrays


// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }


// --------------------------------------


// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`namastey ${greet}`);
    
// }


// --------------------------------------

// maps

// Map objects are collections of key-value pairs.
// A key in the Map may only occur once; it is unique in the Map's collection.

// const countryCodes = new Map()

// countryCodes.set('IN', 'India')
// countryCodes.set('USA', 'United States of America')
// countryCodes.set('FR', 'France')
// countryCodes.set('IN', 'India')

// // console.log(countryCodes);

// for (const code of countryCodes) {
//     console.log(code);
    
// }


// for (const [code, value] of countryCodes) {
//     console.log(`${code} : ${value}`);
    
// }


// ---------------------------------------

// for-of loop on Objects

// const myObject = {
//     'game1': 'pubg',
//     'game2': 'COC'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ' : ', value);
    
// }