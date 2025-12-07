// var workshop = {
//   teacher: "shahrukh",
//   ask(quesion) {
//     console.log(this.teacher, quesion);
//   },
// };

// workshop.ask("sir hello");  // shahrukh sir hello

/* more safer iife module with closure -> */

// var workshop =(function module(teacher){
//     var publicAPI = {ask,};
//     return publicAPI;

//     function ask(quesion){
//         console.log(teacher,quesion);
//     }

// })("shahrukh");

// workshop.ask("heelo sir");      //shahrukh heelo sir

/* without iife */

// function module(teacher) {
//   var publicAPI = { ask };
//   return publicAPI;

//   function ask(quesion) {
//     console.log(teacher, quesion);
//   }
// }

// let val = module("shahrukh");

// val.ask("sir hello"); // shahrukh sir hello
