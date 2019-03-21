import Vue from 'vue';
import App from './App.vue'

import createRouter from './router';
import createStore from './store';

// 为了兼容服务端 要把这个方法改造成函数

import bus from './libs/eventBus'
export default () => { // 创建实例的函数
    let router = createRouter();
    let store = createStore();
    let app = new Vue({
        router,
        store,
        render:(h)=>h(App)
    });
    return {app,router,store};
}


