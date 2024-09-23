// old approach or method

// function based approach

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })
}

const ms = new User('ms@meta.com', 'abcd')
console.log(ms.email);
console.log(ms._email);
