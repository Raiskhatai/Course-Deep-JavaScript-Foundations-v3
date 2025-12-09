// JavaScript me har object ke peeche ek hidden object hota hai, jisko bolte hain prototype.
// Every function and object in javascript has an property called prototype.

// function workshop(teacher) {
//   this.teacher = teacher;
// }

// workshop.prototype.ask = function hello(greet) {
//   console.log(greet, this.teacher);
// };

// let obj = new workshop("shahrukh");
// obj.ask("hi");       // hi shahrukh

// Array.prototype.add = function () {
//   let val = this.reduce((a, v) => a + v, 0);
//   console.log(val);
//   return val;
// };

// let arr = [1, 2, 3, 4, 5];

// arr.add();       //15

// function person(fname, lname, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
// }

// person.prototype.fullname = function () {
//   console.log(this.fname + " " + this.lname);
// };

// let person1 = new person("shahrukh", "khatai");
// let person2 = new person("salmna", "khan", 20);

// person1.fullname();         //shahrukh khatai
// console.log(person2);   //person { fname: 'salmna', lname: 'khan', age: 20 }
