// const promiseOne = new Promise(function(resolve, reject) {
//     //--->Do an async task
//     // DB Calls, cryptography, network
//     setTimeout(() => {
//         console.log("Async task is completed")
//         resolve()
//     }, 1000);
// })

// // here .then is directly associated with resolve
// promiseOne.then(function() {
//     console.log("Promise consumed");
    
// })


// --------------------------------


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task 2');
//         resolve()
//     }, 2000)
// }).then(function() {
//     console.log('Async 2 resolved');
    
// })


// --------------------------------


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({userName: "ms", email:"ms@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
    
// })


// --------------------------------


// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // let error = true
//         let error = false
//         if(!error) {
//             resolve({username: 'ms', password: '1234'})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
    
// }).catch(function(error) {
//     console.log(error);
    
// }).finally(() => {
//     console.log("The Promise is either resolved or rejected");
    
// })


// --------------------------------


// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         // let error = false
//         if(!error) {
//             resolve({username: 'ms', password: '1234'})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// --------------------------------


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // const data = response.json()
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E: ', e);
        
//     }
// }

// getAllUsers()


// --------------------------------
// above same code in .then .catch


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})