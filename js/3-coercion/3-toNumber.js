// toNumber jesa koi method nhi hey but js internally use karta hey ise

console.log("" - 0); //0
console.log("0" - 0); //0
console.log("-0" - 0); //-0
console.log("009" - 0); //9
console.log("3.1415" - 0); //3.1415
console.log("0." - 0); //0
console.log(".0" - 0); //0
console.log("." - 0); //NaN
console.log("0xaf" - 0); //175

console.log(false - 0); //0
console.log(true - 0); //1
console.log(null - 0); //0
console.log(undefined - 0); //NaN

// with nonprimitive types

/* array */

console.log([""] - 0); //0
console.log(["0"] - 0); //0
console.log(["-0"] - 0); //-0
console.log([null] - 0); //0         //null become empty string and empty string become 0
console.log([undefined] - 0); //0      //undefined become empty string and empty string become 0
console.log([1, 2, 3] - 0); //NaN
console.log(["1,2,3"] - 0); //NaN
console.log([[[[]]]] - 0); //0          // become empty string and empty string become 0
console.log([[[[5]]]] - 0); //0          // become empty string and empty string become 0

/* object */

console.log(
  {
    valueOf() {
      return 3;
    },
  } - 0
); //3
