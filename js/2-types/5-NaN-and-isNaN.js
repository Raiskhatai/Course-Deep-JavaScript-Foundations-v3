// NaN jab kisi non numeric value ko number mey convert karte hey tab wah NaN ho jati hey
// NaN means invalid number

// example :

console.log("hello" - 1); //NaN
console.log(Number("hello")); //NaN

// example :
// isNaN check karta hey value ko number mey convert karke agar number mil jaye to false warna true

console.log(isNaN(5)); // false
console.log(isNaN("hello")); // true
console.log(isNaN("hello world !")); //true

// kyuki isNaN pahle convert karta hey to wah empty string ko number mey convert karta hey 0 or result false aata hey
console.log(isNaN("")); //false

// example :
// Number.isNaN () : yeh agar value exact NaN hue to true warna false

console.log(Number.isNaN(5));
console.log(Number.isNaN("hello"));
