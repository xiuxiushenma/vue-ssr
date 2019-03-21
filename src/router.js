// 配置vue的路由
import Vue from 'vue';
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue'
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(VueMeta); // this.$meta
Vue.use(VueRouter);
export default ()=>{
    let router =  new VueRouter({
        mode:'history',
        routes:[
            {path:'/',component:Bar},
            {path:'/foo',component:Foo}
        ]
    });
    return router;
}