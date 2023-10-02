

const Marval_heros = ["spiderman","ironman","thor"];

const dc_heros =[ "superman","flash","batman"];

// console.log(Marval_heros);
// console.log(dc_heros);

// Marval_heros.push(dc_heros);

// console.log(Marval_heros[3][1])


// const concatinateArray = Marval_heros.concat(dc_heros);

// console.log(concatinateArray);


//++ Spread operatror.


// const newConcatinate = [...Marval_heros,...dc_heros];

// console.log(newConcatinate);


let anotherArray = ["fvg",23,45,33,[5,7,5,4],76,[6,6,7,[4,8,9],8,9]];


let real_anotherarray = anotherArray.flat(Infinity);

// console.log(real_anotherarray);


console.log(Array.isArray("test"));
console.log(Array.from("ishwar singh"));

console.log(    Array.from({name : "ishwar"}))  //interesting

const value1= 200;
const value2= 300;
const value3 = 400;

console.log(Array.of(value1,value2,value3))













