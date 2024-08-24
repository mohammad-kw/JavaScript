// -------------for loop---------------- 


// for(let index = 0; index <= 10; index++) {
//     const element = index
//     if(element == 5) {
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
// }

// -------------------------------------

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j);
        
//     }

// } 

// -------------------------------------


// let dc_heros = ["flash", "batman", "superman"]

// for (let index = 0; index < dc_heros.length; index++) {
//     const element = dc_heros[index];
//     console.log(element);
    
// }


// -------------------------------------


// keywords -> break and continue


// break -> 
// for (let index = 1; index < 20; index++) {

//     if(index == 5) {
//         console.log(`Detected 5`);
//         break;
        
//     }
//     console.log(`Value of i is ${index}`);
        
// }


// continue -> 
for (let index = 1; index < 20; index++) {

    if(index == 5) {
        console.log(`Detected 5`);
        continue;
        
    }
    console.log(`Value of i is ${index}`);
        
}