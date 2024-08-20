// () -> paranthesis
// [] -> brackets
// {} -> braces / curly braces

const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[1]);

// myArr.push(10, 11)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(8)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);



// slice me wo range nhi leta puri
// means ke (0, 3) to wo srf 2 tk hi lega 3 nhi
// and slice me original array change nhi hoti h 
const newArr2 = myArr.slice(0, 3)

console.log("A",  myArr);
console.log(newArr2);
console.log("B",  myArr);

console.log("-----------");


// splice me wo puri range
// means ke (0, 3) to wo 3 tk hi lega
// and splice me original array change hoti h 
const newArr3 = myArr.splice(0, 2)

console.log("A",  myArr);
console.log(newArr3);
console.log("B",  myArr);


