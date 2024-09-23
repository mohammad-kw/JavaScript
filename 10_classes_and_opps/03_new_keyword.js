// this measn jis
// jisne bhi bulaya uska kam kerdo
// jisne bhi bulaya usko increase kerdo

function createUser(username, price) {
    this.username = username;
    this.price = price
}

createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.price}`);
    
}

const chai = new createUser('chai', 50)
const tea = new createUser('tea', 250)

// we don't have to write prototype again and again. js will do it by itself.

chai.printMe()
tea.printMe()

// ye print kerne per hame ye mila tha
// TypeError: Cannot read properties of undefined (reading 'printMe')
// to uske liye humne frr new keyword ka use kara


// ----------------------------------------


// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
