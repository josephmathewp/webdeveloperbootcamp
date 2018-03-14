var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name:"George",
//     age: 11,
//     temperment: "Grouchy"
// });

// var norris = new Cat({
//     name:"Mrs Norris",
//     age: 7,
//     temperment: "Evil"
// });

// norris.save(function(err, cat){
//     if(err)
//     {
//         console.log(error);
//     }
//     else{
//         console.log("Cat Saved");
//         console.log(cat);
//     }
// })

Cat.create({
    name: "Snow White",
    age: 15,
    temperment: "Blad"
}, function(err, cat){
    if(err)
    {
        console.log("ERROR");
    }
    else
    {
        console.log(cat);
    }
})

Cat.find({}, function(err, cats){
    if(err) {
        console.log("Error");
    }
    else {
        console.log(cats);
    }
})