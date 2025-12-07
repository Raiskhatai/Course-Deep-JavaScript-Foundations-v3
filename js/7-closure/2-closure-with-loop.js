/* closure and loop with array  */
// function demo() {
//   let arr = [];

//   for (var i = 0; i <= 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// let val = demo();

// val[0]();   // 4
// val[1]();   // 4
// val[2]();   // 4

// other ex => without array
// with var i
// function demo() {
//   for (var i = 0; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 100);
//   }
// }

// let val=demo(); // 4
// val; // 4
// val; // 4
// val; // 4

// with let i

// function demo() {
//   for (let i = 0; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 100);
//   }
// }

// let val = demo();
// val;
// val;
// val;
