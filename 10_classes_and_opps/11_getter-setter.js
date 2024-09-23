// new approach or method


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    // if we are using getter then we have to use setter also...it is mandatory

    // and getter will not take any value but setter will take a value

    // also in getter we have to return the value but in setter we don't have to return any value

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    // here we were passing (password) so there was an error in it
    // now we are passing it as (_password)

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const ms = new User('ms@email.com', 'abcd')
console.log(ms.password);
console.log(ms.email);
