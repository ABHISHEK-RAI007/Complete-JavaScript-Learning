// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 5;
let num2 = 7;
console.log(num1 > num2);

num1 = 7;
num2 = 7;
console.log(num1 >= num2);
console.log(num1 <= num2);

num1 = 8;
num2 = 7;
console.log(num1 >= num2);

num1 = 6;
num2 = 7;
console.log(num1 < num2);

// == vs === 

num1 = 7;
num2 = 7; 
console.log(num1 == num2);

num1 = "7";
num2 = 7; 
console.log(num1 == num2);; // Only value will consider not data type. this happened only in Js.

// to check data type use === .
console.log(num1 === num2); 

num1 = "7";
num2 = 7; 
console.log(num1 == num2);
console.log(num1 === num2);

// != vs !==

console.log(num1 != num2);

num1 = "8";
num2 = 7; 
console.log( num1 != num2);

// vs !== This will check data type also

num1 = "7";
num2 = 7; 
console.log( num1 !== num2);

