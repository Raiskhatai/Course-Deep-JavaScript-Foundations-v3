// prefix and postfix
// prefix   => pahle increament or decreament feer new value return
// postfix  => pahle old value return feer inclreament or decreament

// prefix = ++a
// postfix = a++

// a++ = a=a+1;
// ++a = a=a+1;

/* diffrence between a++ and a=a+1; */

// let a = "5";
// a = a + 1;
// console.log(a);      //51

// let a = "5";
// console.log(++a);       //6

// example =>
// let a = 5;

// console.log(a++);       // pahle old value return feer increament           5
// console.log(++a);       // pahle increament feer new value return           7

// console.log(++a);       // pahle increament feer new value return           8
// console.log(a++);       // pahle old value return feer value increament     8
// console.log(a)          // 9

// example 2
// let a,
//   b = 5;
// a = b++;
// console.log(a, b);      // 5 6

// let a,
//   b = 5;
// a = ++b;
// console.log(a, b);      //6 6

// decreament examples

// example =>
// let a = 5;

// console.log(a--); // pahle old value return feer decreament           5
// console.log(--a); // pahle decreament feer new value return           3

// console.log(--a); // pahle decreament feer new value return           2
// console.log(a--); // pahle old value return feer value decreament     2
// console.log(a); // 1

// example 2

// let a,
//   b = 5;
// a = b--;
// console.log(a, b); // 5 4

// let a,
//   b = 5;
// a = --b;
// console.log(a, b); // 4 4
