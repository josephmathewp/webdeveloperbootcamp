var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser")

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.render("landing");
});

var campgrounds=[
    {name:"Salmon Creek", image:"https://tse1.mm.bing.net/th?id=OIP.IBe-7MYwIlDYvcKKQ3FrCQHaE8&w=260&h=174&c=7&o=5&pid=1.7"},
    {name:"Granite Hill", image:"http://www.chamberofthenorthcountry.com/uploads/2/4/8/3/24836756/433177_orig.jpg"},
    {name:"Mountain Goats Rest", image:"http://www.enota.com/tentstream.JPG"},
    {name:"Salmon Creek", image:"https://tse1.mm.bing.net/th?id=OIP.IBe-7MYwIlDYvcKKQ3FrCQHaE8&w=260&h=174&c=7&o=5&pid=1.7"},
    {name:"Granite Hill", image:"http://www.chamberofthenorthcountry.com/uploads/2/4/8/3/24836756/433177_orig.jpg"},
    {name:"Mountain Goats Rest", image:"http://www.enota.com/tentstream.JPG"},
    {name:"Salmon Creek", image:"https://tse1.mm.bing.net/th?id=OIP.IBe-7MYwIlDYvcKKQ3FrCQHaE8&w=260&h=174&c=7&o=5&pid=1.7"},
    {name:"Granite Hill", image:"http://www.chamberofthenorthcountry.com/uploads/2/4/8/3/24836756/433177_orig.jpg"},
    {name:"Mountain Goats Rest", image:"http://www.enota.com/tentstream.JPG"},
    {name:"Salmon Creek", image:"https://tse1.mm.bing.net/th?id=OIP.IBe-7MYwIlDYvcKKQ3FrCQHaE8&w=260&h=174&c=7&o=5&pid=1.7"},
    {name:"Granite Hill", image:"http://www.chamberofthenorthcountry.com/uploads/2/4/8/3/24836756/433177_orig.jpg"},
    {name:"Mountain Goats Rest", image:"http://www.enota.com/tentstream.JPG"},
    {name:"Salmon Creek", image:"https://tse1.mm.bing.net/th?id=OIP.IBe-7MYwIlDYvcKKQ3FrCQHaE8&w=260&h=174&c=7&o=5&pid=1.7"},
    {name:"Granite Hill", image:"http://www.chamberofthenorthcountry.com/uploads/2/4/8/3/24836756/433177_orig.jpg"},
    {name:"Mountain Goats Rest", image:"http://www.enota.com/tentstream.JPG"}
]

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds",function(req, res){
    var name = req.body.name;
    var image = req.body.image;

    var newCampGround = {name: name, image: image};

    campgrounds.push(newCampGround);

    res.redirect("/campgrounds");
});

app.listen(3002, "127.0.0.1", function() {
    console.log("App Started");
})