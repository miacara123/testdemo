var myModule = angular.module("myModule", []);

myModule.run(function($templateCache) {
    $templateCache.put("hh.html", "<div>Hello evne!</div>")
});

myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        template: $templateCache.get("hh.html"),
        replace: true
    }
})