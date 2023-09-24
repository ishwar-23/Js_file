
const name = "ishwar";
const repocouunt = 50;

// console.log(`My name is ${name} and my repocount is ${repocouunt} `);
// console.log(`My name is ${name.toUpperCase()} and my repocount is ${repocouunt} `);
// console.log(`My name is ${name.toUpperCase()} and my repocount is ${repocouunt} `);
// console.log(`My name is ${name.toLowerCase()} and my repocount is ${repocouunt} `);

// console.log(name.length);
// console.log(name.toUpperCase());

// console.log(name.charAt(2));
// console.log(name.indexOf("i"));

const myname = "    ishwarsingh   " 
const menewname = "ishwarsingh"
// console.log(myname.trim());

// console.log(menewname);

const str = "hello world how are you ";

String.prototype.customMethod = function(){
    return this.toUpperCase();
}

// console.log(str.customMethod());

// console.log(str.toUpperCase());


// console.log(str.charAt(0));
// console.log(str.lastIndexOf("hello"));
// console.log(str.lastIndexOf("how"));

console.log(str.slice(0,5))

const school_name1 = "             my school    name is  dav  p u blic sch    oool        ";
const school_name = "             my schoolname is dav  public schoool        ";

// console.log(school_name);
// console.log(school_name.split());
// console.log(school_name.trim());

const fruits = "banana,apple,mango,litchi";

// console.log(fruits)
// console.log(fruits.split(","))



const dropdownvalue = "1234;;;test1"
const dropdownvalue2 = "1234;;;test2"

// console.log(dropdownvalue.split(";;;"));

const newstr = "abcd";

// console.log(newstr.repeat(5));



const newconstant = "Hellow world";

console.log(newconstant.replace("Hellow","Universe"));
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCodePoint(128516));






























