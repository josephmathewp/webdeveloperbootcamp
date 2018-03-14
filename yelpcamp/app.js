var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser")
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp")
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.render("landing");
});

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err) {
            console.log(err);
        }
        else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    console.log(req.param.id);
    var camp = Campground.findById(req.params.id, function(err, foundCampGround){
        if(err){
            console.log("ERROR");
        }
        else {
            console.log(foundCampGround);
            res.render("show", {campground: foundCampGround});
        }
    });
    
});

app.post("/campgrounds",function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampGround = {name: name, image: image, description: description};
    console.log(newCampGround);
    Campground.create(newCampGround, function(err, campground){
        if(err){
            console.log("ERROR");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.listen(3002, "127.0.0.1", function() {
    console.log("App Started");
})