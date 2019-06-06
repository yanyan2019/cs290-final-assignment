console.log("=index.js=");
var tc = document.getElementByID('card');
var hasAp = false;
function appendD77() {
  var d77 = document.createElement('p');
  d77.innerHTML = "<!-->\n     _\n ,__(.)< (NYAN!)\n  \\___)\n~~~~~~~~~~~~~~~~~~\n<!-->";
  if(!hasAp) {
    tc.appendChild(d77);
    hasAp = true;
  }
}
appendD77();
