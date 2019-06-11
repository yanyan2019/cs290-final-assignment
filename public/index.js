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
