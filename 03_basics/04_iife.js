// Immediately Invoked Function Expressions (IIFE)


// // normal
// function connect() {
//     console.log("DB CONNECTED");
// }
// connect()


// ------------------------------


// iife
// () -> 1st () is the defination
// () -> 2nd () is the execution

// named iife
(function connect2() {
    console.log("DB CONNECTED");
})();

// many times there is a pollution due to global variables
// to avoid that pollution we use iife



// we have to put a semicolon at the end of the iife.
// to execute other functions

// unnamed iife
( () => {
    console.log("DB CONNECTED 2");
})();


// how to pass parameters
( (name) => {
    console.log(`${name}`);
})("mohammad");