

// global scope
var c = 300


if(true) {
    // block scope
    let a = 10
    const b = 20 
    var c = 30
}


// here the scope of a and b is till the if condtion only 
// so the a and b which we are printing outside is not defined

// but the c will be printed
// because the scope of var is outside the if condition also
// so thats why we dont use the var

// console.log(a);
// console.log(b);
// console.log(c);

// --------------------------

// asked in interviews

// the scope we check on the console(browser) is different
// and the scope we check through the node is different 


// --------------------------


// // child elements can access the parant elements
// // but parant elements cannot access the childs elements
// function one() {
//     const username = "saifee"

//     function two() {
//         const website = "studynotion"
//         console.log(username);
//     }

//     // console.log(website);

//     two()
// }

// one()


// -----------------------------------

// if(true) {
//     const username = "mohammad"
//     if(username === "mohammad") {
//         const website = " netflix"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);



// -------------------------------

// in this method it can access the addOne function
console.log(addOne(5));

function addOne(num) {
    return num + 1
}


// in this method it cannot access the addTwo function
console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2
}