// Dynamic Scope : Function jahan se call hua hai, wahaan ke variables dekhta hai. (JS me nahi, kuch languages like Bash, Lisp ke purane versions me milta hai)

// Dynamic Scope doesn't exist practically but theorically it exists

var a = "10";

function outer() {
  var a = "20";
  console.log(a); // dynamicly a me se 10 hata kar a me 20 insert kar diya
}

outer();
