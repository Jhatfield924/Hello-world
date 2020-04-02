var num = -10;

while (num < 20) {
  console.log(num);
  num++;
}

var newNum = 10;

while (newNum < 40) {
  if (newNum % 3) {
    console.log(newNum);
  }
  newNum++;
}

var odd = 300;

while (odd < 334) {
  if (odd % 2) {
    console.log(odd);
  }
  odd++;
}

var divisble = 5;

while (divisble < 50) {
  if (divisble % 5 === 0 && divisble % 3 === 0) {
    console.log(divisble);
  }
  divisble++;
}
