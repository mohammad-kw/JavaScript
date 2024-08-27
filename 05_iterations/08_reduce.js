const nums = [1, 2, 3]


// normal function
// const totalSum = nums.reduce(function (acc, currvalue) {
//     console.log(`acc: ${acc} and currvalue: ${currvalue}`);
    
//     return acc + currvalue
// }, 0)

// console.log(totalSum);


// --->


// arrow function
// const totalSum = nums.reduce( (acc, currvalue) => acc + currvalue, 0 )

// console.log(totalSum);



// ---------------------------------------

const shoppingCart = [
    {
        itemName: 'js course',
        price: 3000
    },
    {
        itemName: 'python course',
        price: 9000
    },
    {
        itemName: 'android course',
        price: 12000
    },
    {
        itemName: 'web dev course',
        price: 15900
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(`Total: ${priceToPay}`);
