// dynamic scope : jaha se function call hua us scope se variable ki value li jati hey but yeh theorycal hey old language mey use hoti thi

var teacher = "shahrukh";

function first(quesion) {
  var teacher = "salman";
  console.log(quesion, teacher); // who salman real
}

function second() {
  var teacher = "aamir";
  first("who");
}

second(); // dynamic scope mey teacher aamir hota : theory op = who aamir

var a = "good";

function student(b) {
  var c = "someone";
  console.log(b, c);
}

function student2() {
  var d = "someone2";
  student("hello to");
}

student2();
