var colorDisplay = document.getElementById("colorDisplay");
var squares = document.getElementsByClassName("square");
var container = document.getElementById("container");
var easy = document.getElementById("easyButt");
var hard = document.getElementById("hardButt");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var divColor = document.getElementById("divColor");
var randomizedColor = [];
var easyMode = true;

init();

function init() {
  while (container.firstChild) {
    container.lastChild.remove();
  }
  if (!easyMode) {
    randomizedColor = colorMake(6);
  } else {
    randomizedColor = colorMake(3);
  }
  setUpSquares();
  result.textContent = "";
  divColor.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors";
}

reset.addEventListener("click", () => {
  init();
});

easyButt.addEventListener("click", () => {
  easyMode = true;
  hardButt.classList.remove("selected");
  easyButt.classList.add("selected");
  init();
});

hardButt.addEventListener("click", () => {
  easyMode = false;
  hardButt.classList.add("selected");
  easyButt.classList.remove("selected");
  init();
});

function colorMake(colors) {
  var colorsArr = [];
  for (var i = 0; i < colors; i++) {
    colorsArr.push(
      "rgb(" +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ")"
    );
    var square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = colorsArr[i];
    container.appendChild(square);
  }

  colorDisplay.textContent =
    colorsArr[
      easyMode ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 5)
    ];
  return colorsArr;
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomizedColor[i];

    squares[i].addEventListener("click", function (e) {
      var clickedSquare = this.style.backgroundColor;
      if (colorDisplay.textContent === clickedSquare) {
        result.textContent = "Congrats!";
        reset.textContent = "Play Again?";
        divColor.style.backgroundColor = clickedSquare;

        for (var i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = colorDisplay.textContent;
          squares[i].classList.remove("fadeOut");
        }

        console.log(squares);
      } else {
        this.classList.add("fadeOut");
        result.textContent = "Try Again!";
      }
    });
  }
}
