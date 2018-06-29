angular.module('ngComponentApp')
.component('ngComWithControllerAs', {
    template: `
        <div>
            <h3>这是一个使用了controllerAs的组件</h3>
            <p>你好,{{vm.name}}</p>
        </div>
    `,
    controller: ngComController,
    controllerAs: 'vm',  // 指定控制器的一个别名,然后在控制器中,使用var vim = this,进行绑定,这样的话,就不用使用到angular提供的$ctrl
});

function ngComController() {
    console.log('进入组件controller');
    var vm = this;
    this.name = "ken";
    // vm.name = "ken";  // 同样可以
}