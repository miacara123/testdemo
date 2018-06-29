var myModule = angular.module('myModule', []);
myModule.directive('hello', function() {
    return {
        restrict: 'AEMC',  //  匹配模式 A(默认)-属性   E-元素   C-样式类   M-注释 
        template: '<div>Hi everyone!</div>',
        replace: true  // true是用template里的内容直接直接替换自定义标签的内容；false则在template外面还有自定义标签包裹(<hello></hello>)
    }
});

myModule.directive('error', function() {
    return {
        restrict: 'E',
        template: '<div><input ng-model="txt"/></div>'+'<div>{{txt}}</div>',
        link: function(scope, element) {
            scope.$watch('txt', function(newVal) {
                if(newVal === 'error'){
                    element.addClass('big');
                }
            })
        }
    }
})