// toString(): js internally convert primitve data types into a string.
//  it also coercion object,arrays and function
// js khud se intenally jab hum "" inka use karte hey tab wah .tostring() ka use karta hey

console.log((5).toString()); // "5"
console.log(true.toString()); // "true"

/* array coercion */

console.log(["", ""] + ""); //,

console.log(["", ""].toString());   //,
console.log([null, undefined].toString()); //,
console.log([0, 0].toString()); //"0,0"
console.log([[], [], []].toString());   // ,,
console.log([, , ,].toString()); //,,
console.log([5, 3, 2].toString()); //"5,3,2"
console.log(["a", "b", "c"].toString()); //"a,b,c"

/* function */

let hello = () => {
  return 12;
};

console.log(typeof hello().toString()); //stirng
console.log(typeof hello()); //number
console.log((() => {}).toString()); // ()=>{}

/* object */

console.log({}.toString()); // [object Object]
console.log({ a: 2 }.toString()); // [object Object]
console.log(
  {
    toString() {
      return "x";
    },
  }.toString()
); //"x"

console.log(
  {
    toString() {
      return "x";
    },
  } + ""
);  //"x"
