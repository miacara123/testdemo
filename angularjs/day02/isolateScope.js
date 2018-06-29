var myModule = angular.module("myModule", []);
myModule.directive("hello", function() {
    return {
        restrict: "AE",
        scope: {},
        template: "<div><input type='text' ng-model='username'>{{username}}</div>",
        replace: true
    }
})