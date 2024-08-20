

const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["batman", "superman", "flash"]


// push will work on existing array only
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);


// concat will give us an new array

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);


// spread operator
// ex -> ek kanch ke glass ko drop krenge to wo spread ho jyega pieces me
// const newHeros = [...marvel_heros, ...dc_heros]
// console.log(newHeros);



// const arr = [1, 2, 3, 4, [2, 45, 5], 7, 9, [1, 3, [4, 0, 3]], 90]
// const arr2 = arr.flat(Infinity)
// console.log(arr2);


// to check if it is an array or not
// console.log(Array.isArray("Mohammad"));

// to convert it into an array
// console.log(Array.from("Mohammad"));


// will give us an empty array
// we have to tell what to do 
// console.log(Array.from({name: "Mohammad"}));


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));

