// 引入 Vue.js 库  
import Vue from 'vue';  
// 引入 ElementUI 库，这是一个为 Vue.js 设计的 UI 组件库  
import ElementUI from 'element-ui';  
// 引入 ElementUI 的 CSS 样式文件，这会覆盖默认的 ElementUI 样式  
import 'element-ui/lib/theme-chalk/index.css';  
  
// 引入 App.vue
import App from '@/App.vue';  
  
// 引入 Vue Router，这是 Vue.js 的官方路由管理器  
import router from "@/router";  
  
// 引入 Vuex，这是 Vue.js 的状态管理库  
import store from "@/store";  
  
// 从 "@/common/myAxios" 引入一个名为 vueInstance 的对象，这个对象可能包含一些 Vue 的实例和方法，以及一些其他的 Axios 相关功能  
import {vueInstance} from "@/common/myAxios";  
  
// 使用 ElementUI，将 ElementUI 的插件和功能添加到 Vue.js 中  
Vue.use(ElementUI);  
  
// 创建一个新的 Vue 实例，并将其挂载到 id 为 "app" 的 DOM 元素上  
let instance = new Vue({  
    el: "#app",  
    // 将刚才引入的 router 对象设置为这个 Vue 实例的 router 属性  
    router,  
    // 将刚才引入的 store 对象设置为这个 Vue 实例的 store 属性  
    store,  
    // 使用一个渲染函数来设置这个 Vue 实例的根组件，渲染函数是一个返回组件 VNode 的函数，这里直接返回 App 组件的 VNode  
    render: h => h(App)  
});  
  
// 将刚才创建的 Vue 实例赋值给 vueInstance.instance，以便在需要的地方使用这个实例  
vueInstance.instance = instance;  
  
// 将这个 Vue 实例的 $store 属性赋值给 vueInstance.store，以便在需要的地方使用这个状态管理库的实例  
vueInstance.store = instance.$store;