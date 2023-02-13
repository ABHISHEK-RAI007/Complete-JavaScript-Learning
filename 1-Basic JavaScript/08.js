// typeof operator 

//  (primitive data types)
// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22;
console.log(typeof age);
console.log(typeof 20);

let firstName = "harshit";
console.log(typeof  firstName );
console.log(typeof  "Abhshek" );

// convert number to string. 

console.log(typeof (age + ""));
// 22 -----> "22"

age = age + "";
console.log(typeof age );

// convert string to number. 
let myStr = "34";
console.log(typeof myStr );

//  Method-1
myStr = +myStr;
console.log(typeof myStr );

// convert number to string. 
//  Method-2
let age2 = 18;
age2 = String(age2)
console.log(typeof age2);

// convert string to number.
//  Method-2
age2 = Number(age2);
console.log(typeof age2);
