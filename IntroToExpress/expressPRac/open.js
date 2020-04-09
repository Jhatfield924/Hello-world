const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:id", (req, res) => {
  if (req.params.id === "pig") {
    res.send("oink");
  } else if (req.params.id === "cow") {
    res.send("moo");
  } else if (req.params.id === "dog") {
    res.send("woof");
  }
});
app.get("/repeat/:word/:num", (req, res) => {
  var message = "";
  for (var i = 0; i < req.params.num; i++) {
    message += req.params.word + "<br>";
  }
  res.send(message);
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen("3000", () => {
  console.log("server has started!");
});
