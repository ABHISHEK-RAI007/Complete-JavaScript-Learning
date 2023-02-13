// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName  = "  Harshit    ";

// trim()
console.log(firstName.length);

// Method-1 
let newString = firstName.trim();
console.log(newString); 
console.log(newString.length);

// Method-2
firstName =  firstName.trim();
console.log(firstName);
console.log(firstName.length);

// toUpperCase()
firstName = firstName.toUpperCase();
console.log(firstName);

// toLowerCase()
firstName =  firstName.toLowerCase();
console.log(firstName);

// slice()

// start index 
// end index

let newString2 = firstName.slice(1, 5);
console.log(newString2);

newString2 = firstName.slice(1,);
console.log(newString2);

