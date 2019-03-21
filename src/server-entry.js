import createApp from './app';
// 服务端会调用此函数 产生一个新的app实例
export default (context)=>{
    return new Promise((resolve,reject)=>{
        let {app,router,store} = createApp();
        router.push(context.url); // 跳转到路由
        // 如果服务端 启动时 直接访问 /foo  返回的页面永远都是 index.html 需要通过路由跳转到指定路径
        // 为了防止路由中的异步逻辑 所以采用 promise的形式 等待路由加载完成后 返回vue实例，服务端才可以渲染出完整的页面


        // 需要把当前页面中匹配到的组件 找到他的asyncData方法让他执行

        router.onReady(()=>{
            // 获取当前路径匹配到的组件  看一下这个组件中 有没有 asyncData方法
            let matchesComponents = router.getMatchedComponents();
            Promise.all(matchesComponents.map(component=>{
                if(component.asyncData){
                    return component.asyncData({store});
                }
            })).then(()=>{
                // 把vuex中的状态 挂载在 上下文中的state上
                context.state = store.state;
                context.meta = app.$meta(); // 不能解构
                // 会自动在window上挂载一个属性__INITIAL_STATE__
                resolve(app);
            }).catch(err=>{
                console.log(err);
            })
        });
    });
};
