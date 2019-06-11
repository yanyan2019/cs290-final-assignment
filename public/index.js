var postBox = document.getElementById('posts');
var form = {
	"name": document.getElementById('ftitle'),
	"text": document.getElementById('ftext'),
	"button": document.getElementById('fbutton')
}
function submitForm(event) {
	console.log({
		"name": form.name.value,
		"text":  form.text.value
	});
	if(form.name.value == "" || form.text.value == "") {
		alert("You did not fill out all fields!");
		return;
	}
	var cardContext = {
    name: form.name.value,
		text: form.text.value
  };
  var cardHTML = Handlebars.templates.ccard(cardContext);
  postBox.insertAdjacentHTML('beforeend',cardHTML);
}
form.button.addEventListener('click',submitForm);