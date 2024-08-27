// -----------------for-each loop-------------------


// kyonki ye ek call back function h isliye iska name nhi hota h
// to yha hum function ka name nhi likhenge
// or ye array ki har ek value ko iterate krega isliye wo values ko name dene ke liye ek name de denge

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// --->

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// --->

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// --->

// function printMe(item) {
//     console.log(item);
    
// }

// we just have to give the reference
// coding.forEach(printMe)

// we dont have to execute the function
// coding.forEach(printMe())


// --->


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } ) 


// ---------------------------------


const languages = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

languages.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.languageFileName);
    
})