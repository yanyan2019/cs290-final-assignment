// server.js
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var tarotData = require('./public/tarot.json');
var postData = require('/public/posts.json');

var app = express();
var port = process.env.PORT || 3000;

console.log("<!-->\n     _\n ,__(.)< (NYAN!)\n  \\___)\n~~~~~~~~~~~~~~~~~~\n<!-->");
function pushPostJSON(ntext, ttext) {
	var jso = fs.open('/public/posts.json');
}
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res, next){
	console.log("root page is loading");
  res.status(200).sendFile(__dirname+ '/public/index.html');
});

app.get('/tarot',function(req, res, next){
    console.log("home page is loading");
    //where displayPage = the basic handlebars template page of BEFORE a card has been selected
    // More than likely FIX ME here
    res.status(200).render('tarotPage');
});

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
app.post('/comment', function(req, res, next) {
	if(req.body && req.body.name && req.body.text) {
		console.log("req.body: ",req.body);
		var post = {
			name: req.body.name,
			text: req.body.text
		};
		console.log("post: ",post);
		pushPostJSON(post.name,post.text);
	}
	else {
		req.status(400).send("Request needs body with name and text!");
	}
});
app.get('*', function(req, res, next){
    console.log("404 page is loading");
    res.status(404).render('404');
});
app.listen(port, function(){
	console.log(" == server is listening: ", port);
});

