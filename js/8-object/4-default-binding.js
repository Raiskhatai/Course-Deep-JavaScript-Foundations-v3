// Jab JavaScript me this ko koi specific rule nahi milta
// — na implicit binding,
// — na explicit binding (call, apply, bind),
// — na new binding,

// tab JS by-default window/global object ko this set karta hai.
// Isko hi default binding bolte hain

// function one(greet) {
//   console.log(this.name, greet);     undefined what's the non-strict-mode default ?
// }
// var fname = "shahrukh";   
// }

// function one(greet) {
//   console.log(this.fname, greet); // agar browser pe run karoge to undefined what's the non-strict-mode default ?
// } // or node mey kar rhey to undefined what's the non-strict-mode default ?

// function two(greet) {
//   "use strict";
//   console.log(this.fname, greet);       //TypeError: Cannot read properties of undefined (reading 'fname')

// one("what's the non-strict-mode default ?");
// two("what's the non-strict-mode default ?");
