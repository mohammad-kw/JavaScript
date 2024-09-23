class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const cls = new User('mohammad')
// console.log(cls.createId());


// if we are using a (static) then we can not access that function or method

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const ms = new Teacher('saifee', 'ms@google.com')
ms.logMe()
// console.log(ms.createId());
