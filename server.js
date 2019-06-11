// server.js

//var express = require('express');
//var app = express();
//var port = process.env.PORT || 12345;


//var tarotData = require('./public/tarot');

//app.use(express.static(__dirname + '/public'));

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var tarotData = require('./public/tarot.json');
var postData; // SET THIS TO THE MONGODB FOR COMMENTS


var app = express();
var port = process.env.PORT || 3000;

console.log("<!-->\n     _\n ,__(.)< (NYAN!)\n  \\___)\n~~~~~~~~~~~~~~~~~~\n<!-->");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

// root path to the front page
app.get('/', function(req, res, next){
	console.log("root page is loading");
  res.status(200).sendFile(__dirname+ '/public/index.html');
});

// home page
app.get('/tarot',function(req, res, next){
    console.log("home page is loading");
    //where displayPage = the basic handlebars template page of BEFORE a card has been selected
    // More than likely FIX ME here
    res.status(200).render('tarotPage');
});

// function to retrive a specific card
app.get('/tarot/:card', function (req, res, next) {
    var card = req.params.card.toLowerCase();
    if (tarotData[card]) {
        //templatize page's for cards FIX ME 
        console.log("name", tarotData[card].name);
        res.status(200).render('tarotPage', {
          singleCard: true,
          name: tarotData[card].name,
          description: tarotData[card].Description,
          photo: tarotData[card].img,
          
          posts: postData
        });
    } else {
        next();
    }
});

// 404 page
app.get('*', function(req, res, next){
    console.log("404 page is loading");
    res.status(404).render('404');
});

app.listen(port, function(){
	console.log(" == server is listening: ", port);
});
