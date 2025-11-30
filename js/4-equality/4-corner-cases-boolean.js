let arr = [];

if (arr) {
  console.log("truthy"); // true kyuki [] ek truthy value hey
}

// example 1 :
if (arr == true) {
  // not execute
}
// reason :
// if(arr==true)
// if([]==true)
// if(""==true)
// if(0==true)
// if(0==1)
// if(false)

// example 2:
if (arr == false) {
  console.log("execute");
}
// reason :s
// if(arr==false)
// if([]==false)
// if(""==false)
// if(0==false)
// if(0==0)
// if(true)