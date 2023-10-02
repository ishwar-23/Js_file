

const mysym = Symbol("key1");


const jsUser = {
  name: "ishwar",
  "fullname": "ishwar kumar",
  age: 25,
  location: "india",
  email: "ishwar@yahoo.com",
  [mysym]: "mykey1",
  lastlogin: ['monday','sasurday']
};


// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["email"]);

// console.log(jsUser["fullname"]);
// console.log( jsUser[mysym]);

// change the object value.\

// jsUser.email = "ishwar@npf.com";

// console.log(jsUser["email"]);

// Object.freeze(jsUser);

// jsUser.email = "ishwar@merrr.com";


jsUser.greetings = function (){
  console.log("hi iam a js user ");
}

console.log(jsUser.greetings());



jsUser.greetingsThree = function (){
  console.log(`hi am my name is ${this.fullname} i am js user`);
  console.log(`hi am using ${this.email} i am js user`);
}

console.log(jsUser.greetingsThree());


