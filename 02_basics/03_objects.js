// singleton -> when we use constructor
// Object.create

// no singleton -> when we use literal


// 
const mySym = Symbol("key1")

// object literals
const jsUser = {
    name: "Mohammad",
    "full name": "Mohammad Saifee",
    [mySym]: "myKey1",
    age: 21,
    location: "Ujjain",
    email: "ms@gmail.com",
    isLoggedIn: false
}

// console.log(jsUser.email);
// console.log(jsUser['email']);

// console.log(jsUser['full name']);
// // console.log(jsUser.full name);

// console.log(jsUser[mySym]);

// jsUser.email = "ms@google.com"
// console.log(jsUser.email);

// Object.freeze(jsUser)

// jsUser.email = "ms1@google.com"
// console.log(jsUser.email);

jsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(jsUser.greeting());


jsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting2());
