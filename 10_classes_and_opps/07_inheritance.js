
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const cls = new Teacher('saifee', 'ms@gmail.com', '1234')

cls.addCourse()
cls.logMe()

console.log(cls instanceof Teacher);
console.log(cls instanceof User);

console.log(User instanceof Teacher);