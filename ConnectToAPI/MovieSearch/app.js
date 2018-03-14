var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.get("/result", function(req, res){
    var url = "http://www.omdbapi.com/?s="+req.query.searchKey+"&apikey=thewdb";
    request.get(url, function(error, resp, body){
        var result = JSON.parse(body);
        res.render("result", {moviesDetail: result["Search"]})
    });
});
app.get("/", function(req, res){
    res.render("search");
});
app.listen(3002, "127.0.0.1", function() {
    console.log("App Started");
})