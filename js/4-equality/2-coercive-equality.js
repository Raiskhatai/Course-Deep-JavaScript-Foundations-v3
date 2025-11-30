// use (==) if the types are not equal.
// (==) agar value non primitive hey to unhey primive banata hey feer unhey number mey convert kar unhey check karta hey

console.log(null == 0); // false
console.log(undefined == 0); // false
console.log(null == undefined); // true(special case);

let workshop1 = { topic: null };
let workshop2 = {};
console.log(workshop1.topic, workshop2.topic); // null undefined

/* both examples are same */
// example 1:
if (
  workshop1.topic == null ||
  (workshop1.topic == undefined && workshop2.topic == null) ||
  workshop2.topic == undefined
) {
  console.log(true);
}

// example 2:
if (workshop1.topic == null && workshop2.topic == null) {
  console.log(true);
}

// console.log([] == 1); // false
// console.log([] == 0); //true

// console.log([1, 2, 4] == 1); // false
// console.log([1, 2] == 0); //true

// console.log(typeof []);
// console.log(typeof [1, 2, 3]);
// console.log(typeof ([1, 2, 3] + ""));
// console.log(typeof ([1, 2, 3] + "" - 0));
// let a = [1, 2, 3] + "" - 0;
// console.log(a);
