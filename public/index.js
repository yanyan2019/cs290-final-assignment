var postBox = document.getElementById('postBox');
var form = {
	"name": document.getElementById('ftitle'),
	"text": document.getElementById('ftext'),
	"button": document.getElementById('fbutton')
}
function submitForm(event) {
	var postReq = new XMLHttpRequest();
	var reqUrl = '/comment';
	postReq.open('POST',reqUrl);
	if(form.name.value == "" || form.text.value == "") {
		alert("You did not fill out all fields!");
		return;
	}
	var reqPost = JSON.stringify({
		name: form.name.value,
		text: form.text.value
	});
	console.log(postReq);
	console.log(reqPost);
	postReq.addEventListener('load',function (event) {
		console.log("postReq!");
		if(event.target.status === 200) {
			var cardContext = {
    		name: form.name.value,
				text: form.text.value
  		};
			var post = Handlebars.templates.ccard(cardContext);
  		form.name.value = "";
  		form.text.value = "";
  		console.log("post: ",post); 
  		postBox.insertAdjacentHTML('afterbegin',post);
		}
		else {
			alert("Error creating comment!" + event.target.response);
		}
	});
	postReq.setRequestHeader('Content-Type','application/json');
	postReq.send(reqPost);
}
form.button.addEventListener('click',submitForm);