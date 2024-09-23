//---> Lexical Scoping

    // child functions (inner) can access the variables of parent functions (outer) but outer functions can not access the variables of inner functions

    // and siblings can also not access the variables of each other (inner and innerTwo)


    function outer() {
        let username = 'mohammad'
        function inner() {
            const secret = 'sshhh'
            console.log('inner', username)
        }
        function innerTwo() {
            console.log('innerTwo', username)
            console.log(secret)
        }
        inner()
        innerTwo()
    }
    outer()
    console.log('outer', username)
    