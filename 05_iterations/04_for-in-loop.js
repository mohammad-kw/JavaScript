// -------------for-in loop------------------

// in for-in loops we get the keys

// most of the time we will use for-in loop for objects


// on objects
// const extensions = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby'
// }

// for (const ex in extensions) {
//     // console.log(ex);
//     console.log(`${ex} shortcut is for ${extensions[ex]}`);
    
// }


// ------------------------------------------

// on arrays
const programming = ['js', 'cpp', 'c', 'java', 'py']

for (const program in programming) {
    // console.log(program);
    console.log(programming[program]);
    
}