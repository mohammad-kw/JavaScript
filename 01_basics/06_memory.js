// Stack (Primitive) -> we will get the copy of the variable

let myName = "Mohammad"
let name = myName
name = "saifee"

console.log(myName);
console.log(name);


// Heap (Non-Primitive) -> we will get the reference of the variable

let userOne = {
    name: "MS",
    id: 123,
    email: "ms@gmail.com"
}

let userTwo = userOne;

userTwo.email = "mk@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

