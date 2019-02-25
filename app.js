var express=require("express"),
    app=express(),
    mongoose=require("mongoose"),
    bodyParser=require("body-parser")
//Array of objects
mongoose.connect("mongodb://localhost/books");
app.use(bodyParser.urlencoded({extended:true}))
var bookSchema =new mongoose.Schema({
    name: String,
    author: String,
    image: String,
    dscp: String
    
    
})

var Book=mongoose.model("Book", bookSchema)

//Creating a book
Book.create( {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
        dscp:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    },function(err, newbook){
      if(err){
          console.log("It didn't work");
          console.log(err)
      } else {
          console.log("work")
          console.log(newbook)
      }
  }
) 
// var book=[
//     {
//         name:"Infinity Countdown",
//         author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
//     },
//     {
//       name:"Infinity Countdown",
//       author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
//     },
//     {
//         name:"Infinity Countdown",
//         author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
    
//     },
//     {
//         name:"Infinity Countdown",
//         author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
//     } ,{
//         name:"Infinity Countdown",
//         author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//     },
//     {
//       name:"Infinity Countdown",
//       author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
//     },
//     {
//         name:"Infinity Countdown",
//         author:"Gerry Gudda",
//         image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
//         description:"TBack during the Time Runs Out storyline, the Infinity Gems were destroyed during the Incursion that affected the Multiverse.[2] When the Multiverse is restored by Mister Fantastic,[3] it enabled the Infinity Gems to be restored. When the Space Gem was the first to manifest, it was targeted by the Frost Giant Snarr on Loki's behalf. He was killed by a somehow-revived Wolverine who claimed the Space Gem"
//     }
    
// ]
    

app.get("/",function(req, res){
    res.redirect("/books")
})   

//index route
app.get("/books",function(req, res){
  Book.find({},function(err,books){
      if(err){
          console.log(err)
      } else{
          res.render("index.ejs",{book:books})
      }
  })
})
 
// post route
 app.post("/books",function(req, res){
    
   var name=req.body.name;
   var author=req.body.author;
   var image=req.body.image;
   var dscp=req.body.description;
   var obj={       name:name,
       author:author,
       dscp:dscp,
       image:image
   }
   Book.create(obj,function(err, newbook){
       if(err){
           console.log("It didn't work");
           console.log(err)
   } else {
           res.redirect("/books")
       }
   }
 ) 
 })

//new route
app.get("/books/new",function(req, res){
   res.render("new.ejs")
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
})    
    