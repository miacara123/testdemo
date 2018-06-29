var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'tpls/index.html'
            },
            'topbar@index': {
                templateUrl: 'tpls/topbar.html'
            },
            'main@index': {
                templateUrl: 'tpls/home.html'
            }
        }
    })
    .state('index.bok', {   // 只是一个状态名
        url: '/book',       // url 地址栏上的网址
        views: {
            'main@index': {
                template: '<h2>图书管理</h2>'
            }
        }
    })
    .state('index.user', {
        url: '/user',
        views: {
            'main@index': {
                templateUrl: 'tpls/user.html'
            }
        }
    })
    .state('index.user.highendusers', {
        url: '/highendusers',
        templateUrl: 'tpls/highendusers.html'
    })
    .state('index.user.normalusers', {
        url: '/normalusers',
        templateUrl: 'tpls/normalusers.html'
    })
    .state('index.user.lowusers', {
        url: '/lowusers',
        templateUrl: 'tpls/lowusers.html'
    })
    .state('index.permission', {
        url: '/permission',
        views: {
            'main@index': {
                template: '<h2>权限管理</h2>'
            }
        }
    })
})