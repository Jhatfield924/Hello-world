const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there!");
});
app.get("/bye", (req, res) => {
  res.send("Goodbye!");
});
app.get("/dogs", (req, res) => {
  res.send("MEOW!");
});

app.get("*", function (req, res) {
  res.send("You are a star!!");
});
app.listen("3000", () => console.log("running on port 3000!"));
