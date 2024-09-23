
// const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// ----------------------------------------


// const chai = {
//     name: "ginger chai",
//     price: '290',
//     isAvailable: true
// }

// // console.log(Object.getOwnPropertyDescriptor(chai));
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// ----------------------------------------


const chai = {
    name: "ginger chai",
    price: '290',
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bni");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
    // enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
}
