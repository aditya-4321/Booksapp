var express=require("express"),
    app=express(),
    mongoose=require("mongoose")
//Array of objects
app.connect("mongodb://localhost/books");
var book=[
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    },
    {
       name:"Infinity Countdown",
       author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    } ,{
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
    },
    {
       name:"Infinity Countdown",
       author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    }
    
]
    

app.get("/",function(req, res){
    res.redirect("/books")
})   

//index route
app.get("/books",function(req, res){
   res.render("index.ejs",{book: book})  
})   
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
})    
    