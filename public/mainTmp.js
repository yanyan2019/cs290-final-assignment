(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Tarot Cards</title>\r\n    <!-- This is a 3rd-party stylesheet to make available the font family to\r\n    be used for this page (\"Roboto\"). -->\r\n    <!--Make changes here in terms of fonts and such-->\r\n\r\n\r\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:100,400,700\"\r\n          rel=\"stylesheet\">\r\n    <!-- This 3rd-party stylesheet incorporates SVG icons from Font Awesome:\r\n    http://fontawesome.com/ -->\r\n    <link rel=\"stylesheet\"\r\n          href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\"\r\n          crossorigin=\"anonymous\">\r\n    <link rel=\"stylesheet\" href=\"/style.css\" media=\"screen\">\r\n    \r\n    <script type= 'text/javacript' src=\"/pageTmp.js\"></script>\r\n    <script type= 'text/javacript' src=\"/tarotCardTmp.js\"></script>\r\n    <script type= 'text/javacript' src=\"/404Tmp.js\"></script>\r\n    \r\n    <script src=\"/index.js\"></script>\r\n    \r\n</head>\r\n\r\n<body>\r\n  "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</body>\r\n</html>\r\n";
},"useData":true});
})();