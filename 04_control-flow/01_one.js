// if else

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

const loggedInFromGoogle = true
const loggedInFromYahoo = false

if(loggedInFromGoogle || loggedInFromYahoo) {
    console.log("User logged in");
    
}

// -----------------------------------

// switch cases

const month = 2

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("august");
        break;
}


// --------------------------------


// truthy values

// const userEmail = "ms@gmail.com" 
// const userEmail = "" 
const userEmail = [] 


if(userEmail) {
    console.log("Got the email");
} else {
    console.log("Did not get the email");
}



// ---------------RULES-------------------

// truthy values

// "0", "false", " ", [], {}, fucntion() {}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



// ----------------------------
// how to check if an array is empty or not

const arr = []

if(arr.length === 0) {
    console.log("Array is empty");
}



// ----------------------------
// how to check if an object is empty or not

const obj = {}

if(Object.keys(obj).length === 0) {
    console.log("Object is empty");
}


// ---------------------------------

// Nullish Coalescing Operator (??): null or undefined

let value;
// value = 5 ?? 10
// value = null ?? 10
value = undefined ?? 10

console.log(value);



// -----------------------------------

// terniary operator

// syntax ->  condition ? true : false
 
const iceTeaPrice = 10
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

