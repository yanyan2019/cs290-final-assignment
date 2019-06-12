(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tarotPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.ccard,depth0,{"name":"ccard","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.tarotCard,depth0,{"name":"tarotCard","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.tarotCard,depth0,{"name":"tarotCard","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n\r\n<header class=\"header\">\r\n    <h1>Tarot Card</h1>\r\n</header>\r\n<sidebar class=\"sidebar\">\r\n    <li><a href=\"0\">0    The Fool</a></li>\r\n    <li><a href=\"1\">1    The Magician</a></li>\r\n    <li><a href=\"2\">2    The High Priestess</a></li>\r\n    <li><a href=\"3\">3    The Empress</a></li>\r\n    <li><a href=\"4\">4    The Emperor</a></li>\r\n    <li><a href=\"5\">5    The Hierophant</a></li>\r\n    <li><a href=\"6\">6    The Lovers</a></li>\r\n    <li><a href=\"7\">7    The Chariot</a></li>\r\n    <li><a href=\"8\">8    Strength</a></li>\r\n    <li><a href=\"9\">9    The Hermit</a></li>\r\n    <li><a href=\"10\">10   The Wheel of Fortune</a></li>\r\n    <li><a href=\"11\">11   Justice</a></li>\r\n    <li><a href=\"12\">12   The Hanged Man</a></li>\r\n    <li><a href=\"13\">13   Death</a></li>\r\n    <li><a href=\"14\">14   Temperance</a></li>\r\n    <li><a href=\"15\">15   The Devil</a></li>\r\n    <li><a href=\"16\">16   The Tower</a></li>\r\n    <li><a href=\"17\">17   The Star</a></li>\r\n    <li><a href=\"18\">18   The Moon</a></li>\r\n    <li><a href=\"19\">19   The Sun</a></li>\r\n    <li><a href=\"20\">20   Judgement</a></li>\r\n    <li><a href=\"21\">21   The World</a></li>\r\n    <div>\r\n			<form  id=\"postForm\" class=\"box\">\r\n				<h2>Comments:</h2>\r\n				<textarea id=\"ftitle\" placeholder=\"Name:\" rows=\"1\" id=\"titBox\"></textarea>\r\n				<textarea id=\"ftext\" placeholder=\"Text:\"rows=\"5\" id=\"texBox\"></textarea>\r\n				<input id=\"fbutton\" type=\"button\" value=\"Submit\">\r\n			</form>\r\n		</div>\r\n		<div id=\"postBox\">\r\n			<!-- Comments Go here!-->\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n    <li class=\"filler\"></li>\r\n</sidebar>\r\n<div class=\"card-holder\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.singleCard : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <!--<article class=\"card\">\r\n        <img class=\"face\" src=\"cardBack.png\" width=\"240\" />\r\n        <div class=\"desc\">\r\n            <h2 class=\"title\">The Wise One</h2>\r\n            <p>Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</p>\r\n        </div>\r\n    </article>-->\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tarotSelected : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"add-card\">\r\n	\r\n</div>\r\n";
},"usePartial":true,"useData":true});
})();