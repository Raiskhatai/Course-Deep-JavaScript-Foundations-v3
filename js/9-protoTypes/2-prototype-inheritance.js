// function creature(lf) {
//   this.lifespan = lf;
// }

// creature.prototype.breath = function () {
//   console.log("breath...");
// };

// let creature1 = new creature(100);
// console.log(creature1); //creature { lifespan: 100}
// creature1.breath(); // breath...

// function person(first, last, age) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
// }

// person.prototype.fullname = function () {
//   console.log(this.first + " " + this.last);
// };

// person.prototype.__proto__ = Object.create(creature.prototype);

// let person1 = new person("Adnan", "chouhan", 20);
// let person2 = new person("Arbaaz", "khan", 18);

// person1.fullname();
// person1.breath();
// console.log(person2);
