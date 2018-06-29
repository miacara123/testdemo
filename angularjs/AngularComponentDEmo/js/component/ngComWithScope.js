angular.module('ngComponentApp')
    .component('ngComWithScope', {
        bindings: {
            name: '=',
            age: '<',
            gender: '@',
            callback: '&'
        },
        template: `
        <div>
            <h3>angular组件变量作用域</h3>
            <ul>
                <li>'='表示双向数据绑定,当父级页面作用域或子级作用域发生变化时,都会影响到对方的作用域</li>
                <li>'<'表示单向数据绑定,从父级页面传递作用域给子级组件,父级页面的作用域改变,子级组件作用域也改变;但反过来,子级作用域变化时,不会影响父级</li>
                <li>'@'表示用于传递字符串参数</li>
                <li>'&'表示用于传递执行回调函数,用于子组件输出给父级页面</li>
            </ul>
            <br>
            <div>
                <p>你好，{{vm.name}}</p>
                <p>年龄：{{vm.age}}</p>
                <p>性别：{{vm.gender}}</p>
                
            </div>
            <br />
            <h3>子级组件</h3>
            <div>
                <span>"=" 示例：</span>
                <button ng-click="vm.childModifyName()">子级控制器修改姓名</button>
                <span>{{vm.name}}</span>
            </div>
            <div>
                <span>"<" 示例：</span>
                <button ng-click="vm.childModifyAge()">子级控制器修改年龄</button>
                <span>{{vm.age}}</span>
            </div>
            <div>
                <span>"@" 示例：</span>
                <span>用于传递字符串参数</span>
                <span>{{vm.gender}}</span>
            </div>
            <div>
                <span>"&" 示例：</span>
                <button ng-click="vm.callback({count: 10});vm.count = 10;">子级控制器修改数量</button>
                <span>{{vm.count}}</span>
            </div>
        </div>
    `,
        controller: ngComController,
        controllerAs: 'vm'
    });

function ngComController($scope) {
    var vm = this;
    vm.childModifyName = function () {
        vm.name = 'yaoyao';
    }
    vm.childModifyAge = function () {
        vm.age = 24;
    }
}