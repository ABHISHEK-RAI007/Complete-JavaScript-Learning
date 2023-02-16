// nested if else

// winning number 19

// 19 then print "your guess is right "
// 17 then print "too low" 
// 20 then print "too high"

let winningNumber = 19;

let userGuess = +prompt("Guess a number"); // Prompt will give you string so to convert into number use +.
console.log(typeof userGuess ,userGuess);

if (userGuess === winningNumber) {
    console.log("Your guess is right");
} else{
    if (userGuess < winningNumber) {
        console.log("too low !!!");
    }
}else{
    console.log("too high !!!");

}



