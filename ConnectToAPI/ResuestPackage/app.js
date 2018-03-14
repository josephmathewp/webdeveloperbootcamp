express = require("express");
app = express();

var request = require("request");

request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", function(error, response, body){
    if(error){
        console.log(error);
    } else if(response.statusCode != 200) {
        console.log("Invalid Status"); 
    } else {
        var data = JSON.parse(body);    
        console.log("Sunset in Hawai is ")
        console.log(data);
    }
});