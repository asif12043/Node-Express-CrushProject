var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var logger = function(req, res, next){
    console.log('logging...');
    next();
}
 
app.use(logger);

app.get('/',function(req, res){
    res.send('hello world');
})

app.listen(3000, function(){
    console.log('server started from 3000...');
})


