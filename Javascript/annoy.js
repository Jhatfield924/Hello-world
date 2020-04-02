// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }

// alert("YAY, We made it!");

// if (answer === "yes") {
//   alert("YAY, We made it!");
// }

// version 2

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes")) {
  if (answer.indexOf("yes") > 0) {
    var answer = prompt("Are we there yet?");
  }
}

alert("YAY, We made it!");
