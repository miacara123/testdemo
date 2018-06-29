angular.module('ngComponentApp')
.component('ngComLifecycle', {
    bindings: {
        name: '<'
    },
    template: `
        <div>
            <h3>组件生命周期</h3>
            <p>你好,{{vm.name}}</p>
        </div>
    `,
    controller: ngComController,
    controllerAs: 'vm'
});

function ngComController(){
    var vm = this;
    this.name = "ken";

    this.$onInit = function() {
        console.log('组件初始化');
    }

    this.$onChanges = function(changes) {
        console.log(changes);
        if(changes.name.isFirstChange()) {
            console.log("组件第一次变化,当前值为:"+changes.name.currentValue);
        } else {
            console.log("组件发生变化,变化前name值为:"+changes.name.previousValue+",变化后name值为:"+changes.name.currentValue);
        }
    }

    this.$doCheck = function() {
        console.log("组件销毁");
    }

    this.$postLink = function() {
        console.log("所有组件已编译完成");
    }
}