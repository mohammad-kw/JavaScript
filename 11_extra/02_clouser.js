function makeFunc() {
    const name = "Instagram"
    function displayName() {
        console.log(name);
    }
    return displayName
}

const myFunc = new makeFunc();
myFunc()



