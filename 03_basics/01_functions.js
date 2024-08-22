// function sayMyName() {
//     console.log('M');
//     console.log('o');
//     console.log('h');
//     console.log('a');
//     console.log('m');
//     console.log('m');
//     console.log('a');
//     console.log('d');
// }

// // Reference
// sayMyName

// // Execution 
// // sayMyName()

// ------------------------------------


// function addTwoNums(num1, num2) {
//     console.log(num1 + num2);
// }

// // without arguments
// addTwoNums()
// // with arguments
// addTwoNums(2, 5)
// // we can also store the value of function in an variable
// const result = addTwoNums(2, 5)

// // but when we will print the value of result it will show us undefined, because it doesnot store the value like these.
// console.log(result);


// -------------------------------------

// function addTwoNums(num1, num2) {
//     let result = num1 + num2
//     return result

//     // another method
//     // return num1 + num2

//     // if u write anything after the return, it will not execute
//     console.log("Mohammad");
    
// }
// const result = addTwoNums(2, 5)
// console.log(result);

// ------------------------------------

// function userLoggedIn(userName) {
//     return `${userName} just logged in`
// }

// // it will execute but not print, because we have not console it
// userLoggedIn("Mohammad")

// console.log(userLoggedIn("Mohammad"));


// ------------------------------------

// // when we have multiple parameters

// // here ... is not spread operator
// // ... is rest operator
// function calculateCartPrice(...price) {
//     return price
// }

// console.log(calculateCartPrice(2, 3, 5, 23));


// ------------------------------------

// // how to pass objects in functions
// const user = {
//     username: "ms",
//     price: 299
// }

// // we can write object name or anyobject
// // if we are writing anyobject, so we can pass any objects there

// function handleObject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// // here we have to pass the object name only which we are going to call
// handleObject(user)

// // we can also pass the object directly
// handleObject({
//     username: "saifee",
//     price: 599
// })



// ------------------------------

// how to pass an array in the funciton

const myArray = [23, 234, 34 ,24674, 7,567]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray));
