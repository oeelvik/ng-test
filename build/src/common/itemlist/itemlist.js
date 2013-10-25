angular.module('itemlist', [])
    
.directive('itemlist', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            selected: "=",
            items: "=",
            columns: "=",
            itemlabel: "@",
            searchable: "@",
            hideseccolsonselect: "@"
        },
        templateUrl: 'itemlist/itemlist.tpl.html',
        link: function(scope, element, attrs) {
            scope.onItemSelect = function(item){
                if(scope.selected == item.id) {
                    scope.selected = null;
                } else {
                    scope.selected = item.id;
                }
            };
            
            scope.itemClass = function(item){
                return item.id == scope.selected ? 'active' : undefined;
            };
        }
        
        
    };
});

