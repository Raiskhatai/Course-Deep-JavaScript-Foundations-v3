// boxing is primitive value ko temporarily object mey convert kar dena. feer end mey temp obj ko delete kar deta js  
// primitive data par method nhi kaam karte.

// example =>
let a = "hello";
console.log(a.toUpperCase());

// in behind js temporarily  a  ko object banaya jata hey uspar touppercase lagta hey feer temporarily obj ko destroy ka dete hey js
// console.log(new String(a).toUpperCase());

// example 2 =>
let num = 45.4234;
console.log(num.toFixed(2));
// console.log(new Number(45.4234).toFixed(2));
