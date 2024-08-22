const tinderUser = {}

tinderUser.email = "ms@google.com"
tinderUser.id = 3
tinderUser.isLoggedIn = true

// console.log(tinderUser);


// const regularUser = {
//     email: "ms@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Mohammad",
//             lastName: "Saifee"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName);



// const user1 = {1: "a", 2: "b"}
// const user2 = {3: "c", 4: "d"}

// const user3 = Object.assign(user1, user2)

// console.log(user3);


// const users = [
//     {
//         email: "ms1@microsoft.com",
//         id: 1
//     },
//     {
//         email: "ms2@microsoft.com",
//         id: 2
//     },{
//         email: "ms3@microsoft.com",
//         id: 3
//     },
// ]

// console.log(users[2].email);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));



// -----------------Main Concept------------------

// -----------------Destructuring-----------------

const course = {
    courseName: "JavaScript",
    coursePrice: 999,
    courseDuration: "2 Months"
}

const {courseDuration} = course;
console.log(courseDuration);

// we can also give name according to us
const {coursePrice: price} = course;
console.log(price);


// -------------JSON Structure--------------

// it is same as object, but it does not have any name
// and the keys should also be string

// {
//     "name": "ms",
//     "price": 599,
//     "duration": "1 month"
// }


// many time we also get APIS in array form also, in which there are multiple objects

// [
//     {},
//     {},
//     {}
// ]