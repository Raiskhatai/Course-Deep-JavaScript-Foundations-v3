// 1. == (Loose Equality)
// Type convert karta hai compare karne se pehle.
// Yaani, agar dono values ka type same nahi hai, to pehle convert karega, phir compare karega.

let a = "5" == 5; // true  (string "5" ko number 5 me convert karega)
let b = true == 1; // true  (true ko 1 me convert karega)
let c = false == 0; // true  (false ko 0 me convert karega)
let d = null == undefined; // true  (special case)
let e = "" == ""; //true
let f = "" == 0; //true
let g = {} == {}; //false *
let h = [] == []; //false *
let j = "" == []; //true
let k = "" == {}; //false;
let l = "1" == [1]; //true
let m = new Date() == Date; //false
let n = [] == {}; //false
console.log(a, b, c, d, e, f, g, h, j, k, l, m, n);
// let i = ()=>{} == ()=>{}; not allowed;

// 2. === (Strict Equality)
// Type convert nahi karta.
// Type bhi same hona chahiye aur value bhi same.

a = "5" === 5; // false (type alag: string vs number)
b = 1 === true; // false (type alag: number vs boolean)
c = 0 === false; // false
d = 5 === 5; // true
e = null === undefined; //false
f = "" === ""; //true
g = "" === 0; //true
// h = {} === {}; //This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)
console.log(a, b, c, d, e, f, g, h);

var student_name1 = "Frank";
var student_name2 = `${student_name1}`;

console.log(student_name1 == student_name2); //true
console.log(student_name1 === student_name2); //true

var workshopEnrollment1 = 10;
var workshopEnrollment2 = workshopEnrollment1 + 0;

console.log(workshopEnrollment1 == workshopEnrollment2); //true
console.log(workshopEnrollment1 === workshopEnrollment2); //true

var workshop1 = {
  name: "deep javascript foundation ",
};

var workshop2 = {
  name: "deep javascript foundation ",
};

console.log(workshop1 == workshop2);        // non premitive data type reference(address) check karte hey hey or dono object ka address diffrent hey
console.log(workshop1 === workshop2);
