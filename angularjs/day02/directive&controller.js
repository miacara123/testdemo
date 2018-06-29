var myModule = angular.module("myModule", []);

myModule.controller("myCtrl", ['$scope', function($scope) {
    $scope.loadData = function() {
        console.log("加载数据中...");
    }
}]);

myModule.controller("myCtrl2", ['$scope', function($scope) {
    $scope.loadData2 = function() {
        console.log("加载数据中2...");
    }
}]);

myModule.directive("loader", function() {
    return {
        restrict: "AE",
        link: function(scope, element,attr){
            element.bind("mouseenter", function(){
                // scope.loadData();
                // scope.$apply("loadData()");
                scope.$apply(attr.howtoload); // 指令可以用在不同的controller里 控制器与指令之间如何进行交互
            })
        }
    }
})
