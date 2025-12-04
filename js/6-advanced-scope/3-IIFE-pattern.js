// immediate invoke function expression (IIFE) : function scope jisko call karna nhi padta

var teacher = "shahrukh";

(function first(greet) {
  var teacher = "salman";
  console.log(greet, teacher);
})("hello");

(function greet(val) {
  console.log(`hello ${val}`);
})("aamir");

let IIFE = -(function first(a, b) {
  return a;
})(5);

console.log(IIFE); // -5        // IIFE

let fun = function second() {
  console.log("hwlo");
};

fun(); //hwlo

(function () {
  console.log("hello ji "); // IIFE with anonyms function ;
})();

let temp = "salman";
(function another_teacher() {
  let temp = "shahrukh";
  console.log("hello " + temp);
})();

console.log(temp);
