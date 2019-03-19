var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

var campgrounds = [
        {name: "Tsomoriri camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/tsomoriri-camp8.jpg"},
        {name: "West Ladakh Camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/west-ladakh.jpg"},
        {name: "Sangla Valley Camping" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/camping-in-sangla-valley.jpg"},
         {name: "Tsomoriri camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/tsomoriri-camp8.jpg"},
        {name: "West Ladakh Camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/west-ladakh.jpg"},
        {name: "Sangla Valley Camping" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/camping-in-sangla-valley.jpg"},
         {name: "Tsomoriri camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/tsomoriri-camp8.jpg"},
        {name: "West Ladakh Camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/west-ladakh.jpg"},
        {name: "Sangla Valley Camping" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/camping-in-sangla-valley.jpg"},
         {name: "Tsomoriri camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/tsomoriri-camp8.jpg"},
        {name: "West Ladakh Camp" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/west-ladakh.jpg"},
        {name: "Sangla Valley Camping" , image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2012/05/camping-in-sangla-valley.jpg"}
                  
        ]
        

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
        res.render("campgrounds" , {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name , image: image}
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
   
});


app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("The YelpCamp Sever Has Started");
});