var myModule = angular.module("myModule", []);
myModule.directive("superman", function() {
    return {
        scope: {},  // 创建独立作用域
        restrict: 'AE',
        controller: function($scope) {  // 想让指令暴露出一些方法给外部调用
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        link: function(scope, element, attrs) {  //  是用来处理指令内部的一些事务(比如给元素绑定事件,绑定数据之类的)
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            })
        }
    }
});

myModule.directive("strength", function() {
    return {
        restrict: "AE",
        require: "^superman",
        link: function(scope, element, attrs, supermanCtrl) {  
            supermanCtrl.addStrength();
        }
    }
});

myModule.directive("speed", function() {
    return {
        restrict: "AE",
        require: "^superman",
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});

myModule.directive("light", function() {
    return {
        restrict: "AE",
        require: "^superman",
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});