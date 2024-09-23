function SetUsername(username) {

    this.username = username
}

function createUser(username, email, password) {

    // SetUsername(username)
    // SetUsername.call(username)
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUser("mohammad", "ms@gmail.com", "1234")

console.log(user);
