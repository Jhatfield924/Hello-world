console.log(isEven(3));
console.log(newMessage);

var newMessage = "wooeps";

function isEven(num) {
  if (num % 2 == 0) {
    return num + " is an even number!";
  } else {
    return num + " is an odd number!";
  }
}

function factorial(num) {
  var message = "";
  while (num > 0) {
    if (num !== 1) {
      message += num + " X ";
    } else {
      message += num;
    }
    num--;
  }
  console.log(message);
}

const recursionFactorial = num =>
  num === 0 ? 1 : num * recursionFactorial(num - 1);

console.log(recursionFactorial(120));
