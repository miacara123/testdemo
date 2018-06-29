var app = angular.module('myApp', []);
app.factory('Data', function() {
    return {
        msg: '你好啊',
        setMsg: function() {
            this.msg = '我不好';
        }
    }
})
app.service('User', function() {
    this.firstname = '上官';
    this.lastname = '飞燕';
    this.getName = function() {
        return this.firstname + this.lastname;
    }
})
app.controller('myCtrl', function($scope, Data, User) {
    $scope.msg = '你好';
    $scope.data = Data;
    Data.setMsg();
    $scope.uname = User.getName();
})