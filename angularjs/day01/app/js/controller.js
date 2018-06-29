var bookStoreCtrls = angular.module('bookStoreCtrls', []);
bookStoreCtrls.controller('helloCtrl', ['$scope', function($scope) {
    $scope.greeting = {
        text: 'Hello'
    };
}]);

bookStoreCtrls.controller('bookListCtrl', ['$scope', function($scope) {
    $scope.books = [
        {title: "江湖", author: "hyl"},
        {title: "游戏设计基础", author: "hyl"},
        {title: "angularjs应用", author: "hyl"}
    ]
}]);