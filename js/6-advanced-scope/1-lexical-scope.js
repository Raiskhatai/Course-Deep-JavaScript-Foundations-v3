var global = "shahrukh";

function parent() {
  var inner_var = "salman";
  first_child();
  function first_child() {
    var inner_var_1 = "aamir";
    second_child();
    function second_child() {
      console.log(`${global} ${inner_var} ${inner_var_1}`);
    }
  }
}

parent();
