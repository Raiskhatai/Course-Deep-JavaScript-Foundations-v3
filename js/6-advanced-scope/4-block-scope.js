// block scope : let or const ke liye kaam aata hey

// let a = 1;
// let b = 10;
// {
//   let a = 22;
//   let b = 11;
//   console.log(a, b);     // a=22 b=11
// }
// console.log(a, b);   // a=1,b=10

// {
//   let a = 10;
//   let b = 50;
// }

// console.log(a, b);      // reference error;

/* scope block if or for ke sath use liye jata hey */

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);     // 1 to 10;
// }
// console.log(i);     // reference error

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     let a = 10;
//     console.log(i); // 2 4 6 8
//   }
//   //   console.log(a);       // reference error
// }
