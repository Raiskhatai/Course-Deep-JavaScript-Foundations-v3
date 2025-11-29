// negative zero : special value -0
// === triple equale operator or > < se compare nhi hota wah 0 -0 ko same samjhte hey

console.log(0 === -0); //true
console.log(-0 < 0); // false
console.log(0 > -0); // false

/*     object.is:   */

// object.is strict compare karta hey kisi bhi values ko

console.log(Object.is(0, -0)); // false
console.log(Object.is(0, 0)); // true
console.log(Object.is(-0, -0)); // true
console.log(Object.is("", 0)); // false

console.log("-----------------------------");
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
console.log(Object.is(NaN, "null"));
console.log(Object.is(NaN, NaN));
console.log(Object.is(NaN, 1));
console.log(Object.is(1, 2));
console.log(Object.is(true, false));
console.log(Object.is(true, "true"));
console.log(Object.is(true, true));
