

// two tyoe of data 1> primitive and non primitive.

// 1> Primitive 

// 7 types: number, boolean, string, null, undefined, bigInt, symbol


const score = 10;
const scorevalue= 100;

const isloginn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol("1234")
const idnew = Symbol("1234")

// console.log(id === idnew);



// 2> Non- primitives (refference)

// Arrar, object, function

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap


//  stack (premitives ) and Heap (non-premitives.)

let myname = "ishwar";

let myanpthetname= myname;

myanpthetname ="coding champion";

// console.log(myanpthetname);
// console.log(myname);


let user = {
    name: "ishwar",
    userid: "ishwarkumar09@gmail.com"
}

let user2 = user
user.userid = "kumarishwar@gmail.com"

// console.log(user2);
// console.log(user.userid );
user.name = 2;

console.log(user.name)
console.log(user);




