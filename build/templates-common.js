angular.module('templates-common', ['itemlist/itemlist.tpl.html']);

angular.module("itemlist/itemlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("itemlist/itemlist.tpl.html",
    "\n" +
    "<table class=\"itemlist\" ng-class=\"{hideseccolsonselect : hideseccolsonselect, itemselected: selected}\">\n" +
    "    \n" +
    "    <thead>\n" +
    "        <tr class=\"search\" ng-show=\"searchable\">\n" +
    "            <th colspan=\"100%\">\n" +
    "                <div>\n" +
    "                    <input type=\"search\" placeholder=\"Search\" ng-model=\"searchText\" />\n" +
    "                </div>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <th class=\"column\" ng-repeat=\"column in columns\" ng-class=\"{primary : column.primary}\">\n" +
    "                {{column.label}}\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tr class=\"item\" ng-repeat=\"item in items | filter:searchText\" ng-click=\"onItemSelect(item)\" ng-class-odd=\"'odd'\" ng-class-even=\"'even'\" ng-class=\"itemClass(item)\">\n" +
    "        <td class=\"column\" ng-repeat=\"column in columns\" ng-class=\"{primary : column.primary}\">{{item[column.name]}}</td>\n" +
    "    </tr>\n" +
    "</table>");
}]);
