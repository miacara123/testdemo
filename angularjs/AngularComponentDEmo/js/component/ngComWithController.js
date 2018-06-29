angular.module("ngComponentApp", [])
.component('ngComWithController', {
    template: `
        <div>
            <h3>这是使用了一个controller的组件</h3>
            <p>你好,{{$ctrl.name}}</p>  
        </div>
    `,                            // 使用$ctrl.name用来引用控制器中定义的私有变量;如果直接使用{{name}},将无法获取到name值
                                  // 这里的name是以this.name出现在组件控制器中,只有指定了这个组件的控制器的name;才能获取到这个值
                                  // 而$ctrl就是angular为我们提供的组件控制器的一个别名,在变量前加入这个别名引用,即可以获取到我们想要的值
    controller: ngComController
});
function ngComController() {
    console.log("进入组件controller");
    this.name = "ken";
}