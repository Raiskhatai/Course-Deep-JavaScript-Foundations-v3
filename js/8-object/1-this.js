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

// function fun() {
//   console.log(this); // window object
// }

// // console.log(this); // {};
// fun();

// let a = {
//   name: "shahrukh",
//   lastname: "khatai",
//   fun: function () {
//     console.log(this.name, this.lastname);
//   },
// };

// a.fun();     // shahrukh khatai // implicit binding


