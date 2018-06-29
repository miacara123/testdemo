var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: "779219053@qq.com",
        password: "123456",
        autoLogin: true
    };

    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };

    $scope.setFormData = function() {
        $scope.userInfo = {
            email: "wowowoyam@qq.com",
            password: "654321",
            autoLogin: false
        };
    };

    $scope.restFormData = function() {
        $scope.userInfo = {
            email: "779219053@qq.com",
            password: "123456",
            autoLogin: true
        };
    };
}])