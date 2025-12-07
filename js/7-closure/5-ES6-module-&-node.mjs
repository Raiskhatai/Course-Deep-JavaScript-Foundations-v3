// there are two ways to immport module files
// 1. import FUNCTION NAME form FILE NAME;

// import ask from "workshop.mjs";
// ask("it's a defult import, right ?");

// 2. import * as NAME form  FILE NAME;

import * as workshop from "workshop.mjs";

console.log(workshop.ask("it's a namespace import, right"));
