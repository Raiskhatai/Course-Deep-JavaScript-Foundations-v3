// scope : scope batate koi variable kaha tak access kar sakte hey
// scope ke type : 1> global 2> block 3> functional 4> lexical

/* 1> global scope : inhey program mey kahi bhi access ke kar sakte hey*/

// let name = "shahrukh";

// function greet() {
//   console.log(`hello ${name}`);
// }
// greet();
// console.log(name);

/* 2> block scope : yeh { } ke andar declare hote hey or isme access kiye ja sakte hey */

// {
//   let f_1 = "shahrukh";
//   const f_2 = "salman";
//   var f_3 = "aamir";
// }

// console.log(f_3);       // aamir var block scope nhi hota
// console.log(f_1);       // referecnce error
// console.log(f_2);       // reference error

/* 3> function scope : kisi function ke andar declare variables sirf uske andar he access kar sakte hey */

// function greet() {
//   var f_1 = "shahrukh";
//   let f_2 = "salman";
//   const f_3 = "aamir";
// }

// console.log(`${f_1}`);      // reference error
// console.log(`${f_2}`);      // reference error
// console.log(`${f_3}`);      // reference error

/* 4> lexical scope : inner function apne parent scope ke variables ko access kar sakta - even after parent execution is complete*/
// also nested scope:
// let a = 15;
// function outer() {
//   let b = 25;
//   function inner() {
//     let c = 10;
//     console.log(a + b + c);
//   }
//   inner();
// }

// outer();
