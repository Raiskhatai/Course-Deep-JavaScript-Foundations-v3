// Binding = deciding the value of this

// Jab JS code run hota hai, to kabhi this window ko point karta hai, kabhi object ko, kabhi kuch aur.
// Ye “this kiski taraf point karega” decide karne ka process hi binding hai.

// there are 4 types of binding -> 1) defoult 2) implicit 3) explicit 4) new binding

/* implicit */
// let one = {
//   fname: "shahrukh",
//   greet(val) {
//     console.log(`${this.fname} ${val}`);
//   },
// };

// one.greet("khan");

/* this: Dynamic binding -> sharing */
// normal mey jaha function declare hua waha ka variable use hota function me na milne par global ka variable use hota hey.
// Dynamic mey jaha se call hua function waha ka variable use hoga.

// function fun() {
//   //   let fname = "ameer"; // nhi chalega
//   console.log(this.fname);
// }

// let one = {
//   fname: "shahrukh",
//   fun: fun,
// };

// let two = {
//   fname: "salman",
//   fun,
// };

// one.fun(); // shahrukh
// two.fun(); // salman

/* this : hard binding */

// let workshop = {
//   fname: "shahrukh",
//   ask(val) {
//     console.log(this.fname, val);
//   },
// };

// workshop.ask(" hi"); //
// setTimeout(workshop.ask, 10, " hi"); // undefind hi
// setTimeout(workshop.ask.bind(workshop), 10, " hi");  // shahrukh hi

/* explicit binding */

// function fun() {
//   console.log("hi " + this.fname);
// }

// let one = {
//   fname: "shahrukh",
// };

// fun.call(one);      // hi shahrukh
