

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
  console.log(jsUser.greetings);
}

console.log(jsUser.greetings);




