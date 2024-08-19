// 1. Primitive

// 7 types -> string, number, boolean, null, undefined, symbol, bigInt.

const score = 100
const scoreVal = 100.234

const isLoggedIn = true
const temp = null
let userEmail;

// symbol gives unique value or key
const id = Symbol("123")
const id2 = Symbol("123")

console.log(id == id2);
console.log(id === id2);

const bigNum = 233472852578911359n

// 2. Non-Primitive (Reference)

// Arrays, Functions, Objects

const arr = ["hello", "hii", "bonjour"]

let obj = {
    name: "ms",
    age: 21,
    id: 234
}

let func = function () {
    console.log("Hello world!");
    
}


// typeof

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


