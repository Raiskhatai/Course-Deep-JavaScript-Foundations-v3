// // coercion means data-type conversion
// // there are two type of coercion :- 1 implicit coercion (automatic conversion)
// //                                   2 explicit coercion (manually khud se se karte hey);

// /* implicit coercion */

// console.log("5" * 2); //10
// console.log("hello" + 2); //hello2
// console.log(true + 1); // true
// console.log("" - 1); //-1

// /* imp */
// console.log([10] * 2); // yaha pahle valueof() ka use kiya js ne yeh number(primitive) nhi bana [10] he raha tab js ne tostring() ka use kiya ise "10" coercion kiya
// console.log([10].valueOf()); // [ 10 ];
// console.log([10].toString() * 2); //20

// /* explicit coercion */

// console.log(Number("51")); //51
// console.log(String(51)); //51
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
