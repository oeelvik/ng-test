angular.module('templates-app', ['finder/detail.tpl.html', 'finder/finder.tpl.html', 'finder/history.tpl.html', 'finder/list.tpl.html', 'home/home.tpl.html', 'people/people.tpl.html', 'people/person.tpl.html']);

angular.module("finder/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("finder/detail.tpl.html",
    "detail");
}]);

angular.module("finder/finder.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("finder/finder.tpl.html",
    "<div class=\"crm-finder\">\n" +
    "	<section class=\"history\">\n" +
    "		<div ui-view=\"finder-history\"/>\n" +
    "	</section>\n" +
    "	<section class=\"list\">\n" +
    "		<div ui-view=\"finder-list\"/>\n" +
    "	</section>\n" +
    "	<section class=\"detail\">\n" +
    "		<div ui-view=\"finder-detail\"/>\n" +
    "	</section>\n" +
    "</div>");
}]);

angular.module("finder/history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("finder/history.tpl.html",
    "<ul>\n" +
    "	<li><a href=\"#\">Group - Konfirmanter</a></li>\n" +
    "	<li><a href=\"#\">Person - Nils Amund</a></li>\n" +
    "</ul>");
}]);

angular.module("finder/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("finder/list.tpl.html",
    "<itemlist class=\"peoplelist\" selected=\"selected\" items=\"data.people\" columns=\"data.columns\" searchable=\"true\" hideseccolsonselect=\"true\"></itemlist>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home</h1>");
}]);

angular.module("people/people.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("people/people.tpl.html",
    "<div class=\"crm-people\">\n" +
    "    <itemlist class=\"peoplelist\" selected=\"selected\" items=\"data.people\" columns=\"data.columns\" searchable=\"true\" hideseccolsonselect=\"true\"></itemlist>\n" +
    "\n" +
    "    <div ui-view></div>\n" +
    "</div>");
}]);

angular.module("people/person.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("people/person.tpl.html",
    "\n" +
    "<h1>{{person}}</h1>\n" +
    "\n" +
    "");
}]);
