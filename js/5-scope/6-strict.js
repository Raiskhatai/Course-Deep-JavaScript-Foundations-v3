// function other_class() {
//   teacher = "suzi"; // without any variable type declare is liye yeh global variable hey
//   topic = "react"; // without any variable type declare is liye yeh global variable hey
//   console.log("wellcome");
// }

// other_class();

// console.log(teacher); // teacher redeclare ho gaya .
// console.log(topic); // ? topic

/* agar hum chahte hey ki without var type ke variable declare na ho tab "use strict" ka use karenge */

"use strict";

// let teacher = "kyle";

function other_class() {
  teacher = "suzi"; // refernce error
  topic = "react"; // refernce error
  console.log("wellcome");
}

other_class();
