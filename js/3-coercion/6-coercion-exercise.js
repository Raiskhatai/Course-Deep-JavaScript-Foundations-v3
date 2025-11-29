function is_valid_name(name) {
  if (typeof name === "string" && name.trim().length >= 3) {
    return true;
  }
  return false;
}

let newname = is_valid_name("SHAHRUKH");
console.log(newname);

function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }
  return false;
}

// tests :
console.log(is_valid_name("Frank") === true);
console.log(is_valid_name("") === false);
console.log(is_valid_name(null) === false);
console.log(is_valid_name(undefined) === false);
console.log(is_valid_name(undefined) === false);
console.log(is_valid_name("     \t\n") === false);
console.log(is_valid_name("x") === false);

console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(hoursAttended("", 10) === true);
console.log(hoursAttended(null, null) === true);
console.log(hoursAttended(null, undefined) === true);
console.log(hoursAttended(undefined, undefined) === true);
console.log(hoursAttended(false, false) === true);
console.log(hoursAttended(false, true) === true);
console.log(hoursAttended(true, true) === true);
console.log(hoursAttended(6.1, 10) === true);
console.log(hoursAttended(6, 10.1) === true);
console.log(hoursAttended("6", "10.1") === true);
console.log(hoursAttended("", 10) === true);
