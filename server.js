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

var tarotData = require('./public/tarot');

var app = express();
var port = process.env.PORT || 3000;

//var mongoHost = process.env.MONGO_HOST;
//var mongoPort = process.env.MONGO_PORT || 27017;
//var mongoUser = process.env.MONGO_USER;
//var mongoPassword = process.env.MONGO_PASSWORD;
//var mongoDBName = process.env.MONGO_DB_NAME;

//var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
//var db = null;
console.log("<!-->\n     _\n ,__(.)< (NYAN!)\n  \\___)\n~~~~~~~~~~~~~~~~~~\n<!-->");
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));


// root path to the front page
app.get('/', function(req, res, next){
	console.log("root page is loading");
    //res.status(200).render('homePage'); //where homePage is the templetized version of public/index.html
    //FIX ME
    
    res.status(200).sendFile(__dirname+ '/public/index.html');
});

// home page
app.get('/tarot',function(req, res, next){
    console.log("home page is loading");
    //where displayPage = the basic handlebars template page of BEFORE a card has been selected
    // More than likely FIX ME here
    res.status(200).render('tarotPage');
	//res.status(200).sendFile(__dirname+ '/public/home.html');
});

// function to retrive a specific card
app.get('/tarot/:card', function (req, res, next) {
    var card = req.params.card.toLowerCase();
    if (tarotData[card]) {
        //templatize page's for cards FIX ME 
        res.status(200).render('tarotPage', tarotData[card]);
    } else {
        next();
    }
});

// 404 page
app.get('*', function(req, res, next){
    console.log("404 page is loading");

    res.status(404).render('404page');
	//res.status(404).sendFile(__dirname+ '/public/notfound.html');
});

app.listen(port, function(){
	console.log(" == server is listening: ", port);
});
