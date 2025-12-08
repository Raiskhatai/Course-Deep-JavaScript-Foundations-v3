// JS 4 kaam automatically karti hai:

// 1️. Naya empty object banata hai
// 2️. Us empty object ko “this” assign karta hai
// 3️. Function ke andar jo properties likhi hain, woh iss new object me daalta hai
// 4️. Return this new object automatically (agar tum khud return na karo)

// EX -> 1

// function ask(question) {
//   console.log(this.teacher, question);
// }

// let obj = new ask("what is 'new' doing here ?"); // undefined what is 'new' doing here ?

// EX -> 2

function hello(name, greet) {
  (this.name = name), (this.greet = greet); // this stored data(name,greet) for objects
  console.log(this.name, this.greet);
}

// make new object using new 
let h1 = new hello("shahrukh", " hi");
console.log(h1.greet);
console.log(h1.name);

// h2 is new object 
let h2 = new hello("salman", "hello");
console.log(h2.name, h1.name);
