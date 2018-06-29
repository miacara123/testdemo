var myModule = angular.module("myModule", []);
myModule.controller("myCtrl", ["$scope", function($scope) {
    $scope.ctrlFlavor = "百威";
}])
myModule.directive("drink", function() {
    return {
        restrict: 'AE',
        scope: {
            flavor: '@' // @绑定传递的是字符串不是对象
        },
        template: "<div>{{flavor}}</div>"
        // ,   // {{flavor}} 里面的flavor是来自scope.flavor的flavor
        // link: function(scope, element, attrs) {  // attrs 是一个map,内容是directive上的所有属性
        //     scope.flavor = attrs.flavor;
        // }
    }
});