// ********************* NUMBERS **********************


// const score = 400
// console.log(score);

// const balance = new Number (100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));


// const otherNum = 23.8966              // 23.9
// const otherNum = 123.8966            // 124  
// const otherNum = 1123.8966          //  1.12e+3

// console.log(otherNum.toPrecision(3));


// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));



// ********************* MATHS **********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 5, 7, 3, 4, 9));
// console.log(Math.max(4, 7, 8, 9, 98, 100));


// it will give us no. between 0 and 1
// console.log(Math.random());

// now multiply it with 10, so it will shift one number 
// now there can be a no. like 0.041, so we can get 0
// so add 1 to it so we can not get 0
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);


// formula
const min = 10
const max = 20 

// it will give us no. between 10 to 20

// to round off the value we have used Math.floor()
// to generate a random no. we have used Math.random()
// to get no. between any range multiply it with max - min and add one so u dont get 0
// now add min value to add it to that range
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....




