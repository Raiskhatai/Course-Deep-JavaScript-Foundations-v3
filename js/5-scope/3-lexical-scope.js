/* lexical scope : inner function apne parent scope ke variables ko access kar sakta - even after parent execution is complete*/

let a = "hello ";

function first() {
  let b = "my ";
  function second() {
    let c = "name ";
    function third() {
      let d = "is ";
      function fourth() {
        let e = "shahrukh ";
        console.log(`${a + b + c + d + e}`);
      }
      fourth();
    }
    third();
  }
  second();
}

first();
