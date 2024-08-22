
// this keyword

// const user = {
//     username: "mohammad",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);              // 3
        
//     }
// }

// // this -> talks about the current context

// // user.welcomeMessage()                    // 1
// // user.username = "saifee"
// // user.welcomeMessage()                    // 2

// // here the this will give us an empty object
// console.log(this);                       // 4



// but when we will print (this) in console(browser), it will give us an window


// -----------------------------------


// // in functions it does not work
// function code() {
//     const username = "saifee"
//     console.log(this.username); 
// }
// code()


// const code1 = function() {
//     const username = "saifee"
//     console.log(this.username); 
// }
// code1()

// const code2 = () => {
//     const username = "saifee"
//     console.log(this.username); 
// }

// code2()


// ------------------arrow function--------------------

// 1.

// if we are using curly braces, then we have to use the return 

const sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(2, 3));

// 2.

const sum2 = (num1, num2) => num1 + num2
console.log(sum2(2, 13));

// 3. 
// if we are using the () then we dont have to use the return

const sum3 = (num1, num2) => (num1 + num2)
console.log(sum3(2, 30));


