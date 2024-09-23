// const user = {
//     username: 'ms',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {

//         // this will not work because it dont know the context of the it
//         // console.log(`Username: ${username}`)

//         // here we are using .this for the context
//         console.log(`Username: ${this.username}`)

//         // console.log(this);
        
//     }
// }

// console.log(user.getUserDetails());
// // console.log(this);


// -----------------------------------

// new is a constructor function
// const promiseOne = new Promise()
// const date = new Date()


// -----------------------------------

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User('mohammad', 21, true)
// const userTwo = User('saifee', 22, false)
// console.log(userOne);

// so as we can see, we are not printing the userOne, but we are getting the values of userTwo
// so its overwriting
// thats why we use the (new)


const userOne = new User('mohammad', 21, true)
const userTwo = new User('saifee', 22, false)
console.log(userOne);
console.log(userTwo);



// --------------------------------------

// some gyaan about the (new) keyword

// 1. whenever we will use the new Keyword an empty object will be created which is called as instance.

// 2. a constructor function is called due to new keyword.
// it will pack all the arguments and give it to you.

// 3. .this keyword me sare arguments inject ho jate h.

// 4. you get all these inside the function


// --------------------------------------

// constructor kya h

console.log(userOne.constructor);

// constructor ek reference h jo apko apki hi information deta h 