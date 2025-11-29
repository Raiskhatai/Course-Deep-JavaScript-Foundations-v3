// typeof operator yeh data type batata hey
// typeof hamesha string return karti hey jo value ka data type batati hey
// java script mey value type batate hey other language mey variable ka type

// example 1 primitive

let str = "shahrukh";
console.log(typeof str);            //  string

let num = 10;
console.log(typeof num);            //  number

let bool = true;
console.log(typeof bool);           //  boolean

let undef = undefined;
console.log(typeof undef);          //  undefined

let nullll = null;
console.log(typeof nullll);         //  object // yeh bug hey java script null type null ki jagah object aana

let biginttt = 10n;
console.log(typeof biginttt);           //  bigint

console.log(typeof Symbol());           //  symbol

let a = typeof 10;
console.log(a); // typeof return kiya a mey "number"
console.log(typeof a); // uska type hey string

/* non primitive */

let arr = [10, 13];
console.log(typeof arr); // object

let obj = { fname: "shahrukh", age: 21 };
console.log(typeof obj); // object

let date = new Date();
console.log(typeof date); // object

let regexp = /hello/;
console.log(typeof regexp); // object



function fun() {
  return "hello";
}
console.log(typeof fun);    // function
