var bookStoreApp = angular.module('bookStoreApp', ['ngRoute', 'bookStoreCtrls']);
bookStoreApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/hello',{
        templateUrl: 'tpls/hello.html',
        controller: 'helloCtrl'
    })
    .when('/list',{
        templateUrl: 'tpls/bookList.html',
        controller: 'bookListCtrl'
    })
    .otherwise({redirectTo: '/hello'});
}]);