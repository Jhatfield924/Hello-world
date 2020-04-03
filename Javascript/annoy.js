// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }

// alert("YAY, We made it!");

// if (answer === "yes") {
//   alert("YAY, We made it!");
// }

// version 2
var flag = true;

while (flag) {
  var answer = prompt("Are we there yet?");
  if (answer.toLowerCase().includes("yes")) {
    flag = false;
  }
}

alert("YAY, We made it!");
