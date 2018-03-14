var express = require("express");

var app = express();

app.get("/", function(req, res) {
   res.send("Hi there!");
});

app.get("/cat", function(req, res) {
   res.send("MEOW!!!");
});

app.get("/bye", function(req, res) {
   res.send("Goodbye!");
});

app.get("*", function(req, res) {
    res.send("You are a Star!");
 });

app.listen(3001, "127.0.0.1", function(){
    console.log("Application Started");
});