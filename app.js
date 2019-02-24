var express=require("express"),
    app=express()

//Array of objects   
var book=[
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg"
    },
    {
       name:"Infinity Countdown",
       author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg" 
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg"
    } ,{
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg"
    },
    {
       name:"Infinity Countdown",
       author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg" 
    },
    {
        name:"Infinity Countdown",
        author:"Gerry Gudda",
        image:"https://cdn1.thr.com/sites/default/files/2017/12/infinitycountdown-p_2017.jpg",
    }
    
]
    

app.get("/",function(req, res){
    res.render("books.ejs",{book: book})
})   

    
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
})    
    