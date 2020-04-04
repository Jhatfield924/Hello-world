var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var displayScore1 = document.getElementById("displayScore1");
var displayScore2 = document.getElementById("displayScore2");
var score1 = 0;
var score2 = 0;
var playingTo = document.getElementById("playingTo");
var numberBar = document.getElementById("numberBar");
var playUntil = 5;

numberBar.value = 5;
displayScore1.textContent = score1;
displayScore2.textContent = score2;
playingTo.textContent = playUntil;

const gameOver = (display) => {
  player1.disabled = true;
  player2.disabled = true;
  display.style.color = "green";
};

const softReset = () => {
  player1.disabled = false;
  player2.disabled = false;
  displayScore1.style.color = "black";
  displayScore2.style.color = "black";
};

const resetFn = () => {
  displayScore1.textContent = 0;
  displayScore2.textContent = 0;
  score1 = 0;
  score2 = 0;
  softReset();
};

player1.addEventListener("click", () => {
  score1 += 1;
  if (playUntil === score1) {
    gameOver(displayScore1);
  }
  displayScore1.textContent = score1;
});

player2.addEventListener("click", () => {
  score2 += 1;
  if (playUntil === score2) {
    gameOver(displayScore2);
  }
  displayScore2.textContent = score2;
});

reset.addEventListener("click", resetFn);

numberBar.addEventListener("click", () => {
  playUntil = parseInt(numberBar.value, 10);
  playingTo.textContent = playUntil;
  if (score1 >= playUntil || score2 >= playUntil) {
    if (score1 > score2) {
      gameOver(displayScore1);
    } else if (score2 > score1) {
      gameOver(displayScore2);
    } else {
      gameOver(displayScore1);
      displayScore2.style.color = "green";
    }
  } else {
    softReset();
  }
});
