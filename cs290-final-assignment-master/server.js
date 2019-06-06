// server.js

var express = require('express');
var app = express();
var port = process.env.PORT || 12345;

app.use(express.static(__dirname + '/public'));

// root path to the front page
app.get('/', function(req, res, next){
	console.log("root page is loading");
	res.status(200).sendFile(__dirname+ '/public/index.html');
});

// home page
app.get('/home',function(req, res, next){
	console.log("home page is loading");
	res.status(200).sendFile(__dirname+ '/public/home.html');
});

// 404 page
app.get('*', function(req, res, next){
	console.log("404 page is loading");
	res.status(404).sendFile(__dirname+ '/public/notfound.html');
});

app.listen(port, function(){
	console.log(" == server is listening: ", port);
});
