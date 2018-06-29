var myModule = angular.module("myModule", []);
myModule.controller('myCtrl', ['$scope', function($scope) {
    $scope.ctrlFlavor = "百威";
}])

myModule.directive("drink", function() {
    return {
        restrict: 'AE',
        scope: {
            flavor: '='  // 把flavor上的内容绑定在$scope.ctrlFlavor上(双向绑定)
        },
        template: '<input type="text" ng-model="flavor"/>'
    }
});