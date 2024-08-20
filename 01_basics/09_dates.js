

// let myDate = new Date()

// console.log(typeof myDate);


// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());



// in js months starts from 0.

// let myCreatedDate = new Date(2024, 7, 20)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2024, 7, 20, 5, 30)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("08-20-2024")
// console.log(myCreatedDate2.toLocaleString());



let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());

//miliseconds to seconds
console.log(Math.floor(myTimeStamp/1000));


