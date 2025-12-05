// Hoisting = JS ka behavior jisme code chalne se pehle declarations ko memory me upar rakh diya jata hai.

/* hoisting with var */
// var a = 10;
// console.log(a);     // 10

// console.log(a); // undefined
// var a = 10;

//  beacouse : js mey jab phase 1 mey memory allot karte hey tab var mey undefined assign kar dete hey
// to js is tarah karta hey
// var a=undefined;
// console.log(a);
// a=10;

/* hoisting with let */
// let a = 10;
// console.log(a);     // 10

// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

//  beacouse : js mey jab phase 1 mey memory allot karte hey tab let mey kcuh assign nhi karte sirf memory allot hoti variablbe ko
// to js is tarah karta hey is (TDZ) temporal dead zone mey rakhta hey
// let a
// console.log(a);
// a=10;

/* hoisting with function */
// memory allocation phase 1 ke time memory mey function khud assign kar diya jata hey ;

// fun(); // 10;

// function fun() {
//   let a = 10;
//   let b = 20;
//   console.log(a, b);
// }

fun();
function fun() {
  console.log(a);
  let a = 20; // ReferenceError: Cannot access 'a' before initialization
}
