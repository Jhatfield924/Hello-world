var age = prompt("What is your age?");

if (age < 0) {
  console.log("Invalid number.");
}

if (age === 21) {
  console.log("Happy 21st birthday!!");
}
if (age % 2 !== 0) {
  console.log("Your age is odd!");
}
if (age % Math.sqrt(age) === 0) {
  console.log("Have a great time at the venue!");
} else {
  console.log("Wow you are " + age + "years old!");
}
