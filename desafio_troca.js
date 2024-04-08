let a = 7;
let b = 94;
let temp = null;

console.log("A = " + a);
console.log("B = " + b);
console.log("TEMP = " + temp);

temp = a;
a = b;
b = temp;
temp = null;

console.log(" ");

console.log("A = " + a);
console.log("B = " + b);
console.log("TEMP = " + temp);

console.log(" ");

console.log(typeof a);
console.log(typeof b);
console.log(typeof temp);