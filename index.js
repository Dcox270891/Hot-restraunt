var express = require("express");
var path = require("path");
var app = express();
var PORT = 2929;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });