var secretNumber = 7;

var guess = Number(prompt("Guess a number!"));

if (guess === secretNumber) {
  alert("You guessed it!");
} else if (guess > secretNumber) {
  alert("Too high! Try again!");
  prompt("Guess a number!");
} else {
  alert("Too low! Try again!");
  prompt("Guess a number!");
}
