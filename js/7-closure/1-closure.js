// Jab ek inner function, outer function ke variables ko yaad rakhta hai — even after outer function finish ho chuka hota hai — isko Closure bolte hain.

// function outer() {
//   let a = "shahrukh";
//   return function inner() {
//     return a;
//   };
// }

// let val = outer();
// console.log(val());      //shahrukh

// function outer() {
//   let a = "shahrukh";
//   function inner() {
//     console.log(a);
//   }
//   return inner();
// }

// outer();         // shahrukh

// let val = function outer() {
//   let a = "shahrukh";
//   return function inner() {
//     return a;
//   };
// };

// let other = val();
// console.log(val());     // [Function: inner]
// console.log(other());   // shahrukh

/* other example */

// function outer() {
//   let count = 0;
//   function inner() {
//     return count++;
//   }
//   return inner;
// }

// let val = outer();

// console.log(val());
// console.log(val());
// console.log(val());

