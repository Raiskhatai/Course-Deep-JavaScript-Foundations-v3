// number

console.log(Number("")); //0
console.log(Number("   \t\n")); //0
console.log(Number(" ")); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number([])); //0
console.log(Number([null])); //0
console.log(Number([undefined])); //0
console.log(Number([1, 2, 3])); //NaN
console.log(Number({})); //NaN
console.log(Number(() => {})); //NaN

// string
console.log("-------------------");
console.log(String(-0)); // 0
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([null])); // ""
console.log(String([undefined])); // ""
console.log(String("  ")); // ""

// boolean

console.log(Boolean(new Boolean(false))); //true
