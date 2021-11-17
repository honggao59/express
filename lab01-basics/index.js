//import in the express package
// the express variable will have all the objects and funcitionalities provided by the express package
//the argument to require must match the package name
// the name of the variable is abitragy
const express = require("express");

// creaste an instance of express application
let app = express(); // the return of the express function call is an instance of an express application

app.get('/about', function(req,res){
// req stands for rquest, always be the first argument
//res starnds for response, always the second argument
    res.send("Hello World")
})

// app.get('/', function(req,res){
//     res.send("Goodbye World")
// start the server
// 3000 is the port number. port number are basically address on your computer

app.listen(3000, ()=>{
    console.log("Server started")});


app.get('/contact', function(req,res){
    res.send("Hihi");
})

app.get('/luckynumber', function(req, res){
    let lucky = Math.floor(Math.random()*100 +1);
    res.send("<h1>our lucky number is " + lucky + "</h1>");
})



