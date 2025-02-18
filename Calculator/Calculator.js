//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//__dirname = current path to this file
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;

  res.send("The result is " + result);
});

app.listen("3000", () => console.log("Server started."));
