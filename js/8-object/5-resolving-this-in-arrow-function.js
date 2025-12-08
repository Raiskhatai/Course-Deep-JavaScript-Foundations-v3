// array function kabhi apna this nhi banata .
// array function hamesha upar wale function ya global ka this leta hey.
// object ka this kabhi nhi.

// ex 1 ->

// let workshop = {
//   fname: "shahrukh",
//   ask(question) {
//     setTimeout(() => {
//       console.log(this.fname, question);     // this work kiya kyuki arrow function ka khud this nhi chalta wah ask ke paas gaya jo outer function hey uska this workshop object ka the jo the fname:"shahrukh".
//     }, 50);
//   },
// };

// workshop.ask("Is this lexical 'this' ?");   // shahrukh Is this lexical 'this' ?

// let workshop = {
//   fname: "shahrukh",
//   ask: (question) => {
//     console.log(this.fname, question);
//   },
// };

// workshop.ask("Is this lexical 'this' ?");   // undefined Is this lexical 'this' ?


// let workshop = {
//   fname: "shahrukh",
//   ask: (question) => {
//     console.log(this.fname, question);
//   },
// };

// workshop.ask.call(workshop,"Is this lexical 'this' ?");   // undefined Is this lexical 'this' ?