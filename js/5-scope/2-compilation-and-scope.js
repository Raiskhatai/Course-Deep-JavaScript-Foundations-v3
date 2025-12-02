// javascript mey 2 phase hote hey (1) compilation phase (creation phase) (2) exicution phase (runtime)

// var teacher = "kyle";

// function other_class() {
//   var teacher = "suzy";
//   console.log("wellcome");
// }

// function ask() {
//   console.log(quesion);   // hoisting
//   var quesion = "why";
//   console.log(quesion);
// }

// other_class();
// ask();

// let teacher = "kyle";

/* lexical scope */

// let teacher = "kyle";
// function other_class() {
//   let teacher = "suzi";
//   function ask(quesion) {
//     console.log(teacher, quesion);
//   }
//   ask("why??");
// }

// other_class();  // suzi why 
// ask();  // reference error
