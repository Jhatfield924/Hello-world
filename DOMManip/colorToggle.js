var button = document.querySelector("button");
var bgButton = false;
var body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function () {
  if (bgButton) {
    body.style.background = "purple";
  } else {
    body.style.background = "white";
  }
  bgButton = !bgButton;
});
