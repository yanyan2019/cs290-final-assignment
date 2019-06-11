function fan(){
 var img = document.createElement("IMG");
 img.setAttribute("src", "cardBack.png");
 img.setAttribute("width", "50");
 img.setAttribute("height", "200");


 var deck = document.querySelector(".card-holder");
 var degree = 180/22;
// var d_back = deck.getContext("2d");
// for(var i = 0; i < 180; i+=degree){
	
	//rotate graph	
	//img.rotate(i);
//	d_back.drawImage("cardBack.png", 0, 0);
	deck.appendChild(img);
 // }
  
}

function createCard(photoURL, caption, name) {

  var CardContext = {
    photo: photoURL,
    desc: caption
	name: name
  };

  var CardHTML = Handlebars.templates.tarotCard(CardContext);
  console.log("== photoCardHTML:", CardHTML);
  return CardHTML;
}

function handleModalAcceptClick() {

  var photoURL = document.getElementById('photo-url-input').value.trim();
  var caption = document.getElementById('photo-caption-input').value.trim();
  var name = document.getElementById('name-input').value.trim();

  if (!photoURL || !caption || !name) {
    alert("You must fill in all of the fields!");
  } else {

    var newCard = createCard(photoURL, caption, name);
    var CardContainer = document.querySelector('.card-holder');
    CardContainer.insertAdjacentHTML('beforeend', newCard);
    hideModal();

  }

}

function showModal() {

  var modal = document.getElementById('add-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}

function clearModalInputs() {

  var modalInputElements = document.querySelectorAll('#add-modal input')
  for (var i = 0; i < modalInputElements.length; i++) {
    modalInputElements[i].value = '';
  }

}

function hideModal() {

  var modal = document.getElementById('add-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearModalInputs();

}


window.addEventListener('DOMContentLoaded', function () {

  var addPhotoButton = document.getElementById('add-photo-button');
  addPhotoButton.addEventListener('click', showModal);

  var modalAcceptButton = document.getElementById('modal-accept');
  modalAcceptButton.addEventListener('click', handleModalAcceptClick);

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideModal);
  }

});