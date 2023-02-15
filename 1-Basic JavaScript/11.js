// undefined 

let firstName;
console.log(typeof firstName);

var lastName;
console.log(typeof lastName);

firstName  = "Harshit";
console.log(typeof firstName);
console.log(typeof firstName, firstName);

// null
let myVariable = null;
console.log(typeof myVariable);

myVariable = "Harshit";
console.log(typeof myVariable, myVariable);

// BigInt in 2020
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);

myNumber = BigInt(12);
console.log(myNumber);

let sameNumber = 123n;
console.log(myNumber + sameNumber);




