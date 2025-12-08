// implicit binding vs explicit binding

// imlicit binding :
// let user = {
//   teacher: "shahrukh",
//   fun() {
//     console.log(this.teacher);      // this = user
//   },
// };

// user.fun();

// // explit binding (JS's Dyanamic scope) : 
// function one(greet) {
//   console.log(this.teacher + " " + greet); // this = second() -> obj this.teacher -> obj{teacher}
// }

// function second() {
//   let obj = {
//     teacher: "shahrukh",
//   };
//   one.call(obj, "hello");
// }

// second();       //  shahrukh hello
