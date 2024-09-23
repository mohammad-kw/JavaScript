
// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     uppercase() {
//         return `${this.username.toUpperCase()}`
//     }
// } 

// const cls = new User('ms', 'ms@gmail.com', '1234')

// console.log(cls.encryptPassword());
// console.log(cls.uppercase());



// -----------------------------------

// behind the scene

function User(username, email, password) {
    
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.uppercase = function() {
    return `${this.username.toUpperCase()}`
}

const cls = new User('ms', 'ms@gmail.com', '1234')

console.log(cls.encryptPassword());
console.log(cls.uppercase());