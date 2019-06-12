// server.js
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var tarotData = require('./public/tarot.json');
var postData = require('./public/posts.json');

var app = express();
var port = process.env.PORT || 3000;

console.log("<!-->\n     _\n ,__(.)< (NYAN!)\n  \\___)\n~~~~~~~~~~~~~~~~~~\n<!-->");
function pushPostJSON(ntext, ttext) {
	console.log(postData);
	postData.unshift({
		name: ntext,
		text: ttext
	});
	var JSN = JSON.stringify(postData);
	fs.writeFile("./public/posts.json",JSN);
}
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res, next){
	console.log("root page is loading");
	console.log("req.url:",req.url);
  res.status(200).sendFile(__dirname+ '/public/index.html');
});

app.get('/tarot',function(req, res, next){
    console.log("home page is loading");
    console.log("req.url:",req.url);
    res.status(200).render('tarotPage');
});

app.get('/tarot/:card', function (req, res, next) {
    var card = req.params.card.toLowerCase();
    console.log("req.url:",req.url);
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
	console.log("req.url: ",req.url);
	if(req.body && req.body.name && req.body.text) {
		console.log("req.body: ",req.body);
		var post = {
			name: req.body.name,
			text: req.body.text
		};
		console.log("post: ",post);
		pushPostJSON(post.name,post.text);
		res.status(200).send("Success!");
	}
	else {
		res.status(400).send("Request needs body with name and text!");
	}
});
app.get('*', function(req, res, next){
    console.log("404 page is loading");
    res.status(404).render('404');
});
app.listen(port, function(){
	console.log(" == server is listening: ", port);
});

