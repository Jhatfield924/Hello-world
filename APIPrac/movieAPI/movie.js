var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  var qSearch = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + qSearch + "&apikey=thewdb";
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body);
      res.render("results", { parsedData: parsedData });
    }
  });
});

app.listen("3000", console.log("Server running on port 3000!"));
