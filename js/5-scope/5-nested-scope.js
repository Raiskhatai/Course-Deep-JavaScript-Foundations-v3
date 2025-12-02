// nested-scope: scope ke andar doosra scope hota hai, usko nested scope bolte hain.
// Aur inner scope hamesha outer scope ke variables ko access kar sakta hai,
// par outer scope inner ke variables ko nahi dekh sakta.

let a = 15;
function outer() {
  let b = 25;
  function inner() {
    let c = 10;
    console.log(a + b + c);
  }
  //   console.log(c);        // reference error outerscope inner ke variable ko acess nhi kar sakta
  inner();
}

outer();
