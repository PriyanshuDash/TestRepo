var express = require('express');
var app = express();

app.get('/home', function(req,res){
    res.send("HOME PAGE!");
})

app.get('/about', function(req, res){
    res.send("ABOUT US!");
})

app.listen(3000);