// while loop example 
let num = 10; // Sum of first n natural number
let total = 0;
let i = 0;

while (i <= 10) {
    total = total + i;
    i++;
}
console.log(total);

// Fastest Method b/c constant time and upper method is taking linear time.
num = 100;
total = (num*(num+1))/2;
console.log(total);



