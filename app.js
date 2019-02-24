var express=require("express"),
    app=express()
    
app.get("/books",function(req, res){
    res.send("books are our best friends");
})   
    
    
    
    
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
})    
    