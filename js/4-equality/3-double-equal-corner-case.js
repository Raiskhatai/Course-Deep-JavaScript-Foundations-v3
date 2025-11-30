// corner cases :

let case1 = [];
let case2 = [];

if (case1 == case2) {
    // not execute
  // false both are not primitive data type .double equal inka reference check karta hey jo (equal) == nhi
}

// example 1 :
if (case1 == !case2) {
  console.log(true); // true
}
// reason :
// if(case1 == !case2)
// if([] == ![])
// if([] == false)
// if("" == false)
// if(0 == false)
// if(0 == 0)       // true

// example 2:
if (case1 != case2) {
  console.log("true");
}
// reason :
// if(case1 != case2)
// if([] != [])
// if(!([] == []))
// if(!(false))
// if(true)
