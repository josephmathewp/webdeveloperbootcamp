var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Welcome to my assignment");
});

var Friends = ["Mikha", "Minna", "Soumya"];
app.get("/friends", function(req, res){
    res.render("friends.ejs", {friends: Friends});
});

app.post("/addfriend", function(req, res){
var newFriend = req.body.newfriend;
Friends.push(newFriend);
res.redirect("/friends");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = {
        "pig": "Oink",
        "cow": "Moo",
        "dog": "Woof"
    };

    res.send(sound[animal]);
});

app.get("/speakejs/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = {
        "pig": "Oink",
        "cow": "Moo",
        "dog": "Woof"
    };
    
    res.render("sounds.ejs",{animal: animal, sound: sound[animal]});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Author 1"},
        {title: "Post 2", author: "Author 2"},
        {title: "Post 3", author: "Author 3"},
        {title: "Post 4", author: "Author 4"},
        {title: "Post 5", author: "Author 5"}
    ]
    
    res.render("posts.ejs",{posts: posts});
});

app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var respString = "";
    for (let i = 0; i < times; i++) {
        respString += word + " ";      
    }
    res.send(respString);
});

app.get("*", function(req, res){
    res.send("Wrong page");
});

app.listen(3002, "127.0.0.1", function() {
    console.log("App Started");
})