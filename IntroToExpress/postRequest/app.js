var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var friends = ["Abigail", "Adrian", "Miranda", "Bob"];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends: friends });
});
app.post("/addfriend", (req, res) => {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("*", (req, res) => {
  res.send("Sorry traveler, this place isn't unlocked yet!");
});

app.listen("3000", () => console.log("running on port 3000!"));
