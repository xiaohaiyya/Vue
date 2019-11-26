
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js入口文件的全局js文件
// let Vue = require('组件路径')；
// 导入vue.js核心库 es6中的导入 import
import Vue from 'vue'

//导入App.vue组件，取名叫App组件
import App from './App'
//导入路由模式 在router文件夹下的index.js
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
// 导入store文件夹中的index.js
import store from "./store"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  //把store对象提供给“store”选项，这可以把store实例注入所有的子组件
  store,
  // render: h => h(App),这个就相当于最后两个的集合
  // 注册路由
  router,
  // 注册局部组件
  components: { App }, 
  // 将App组件内容解析到#App所在的div内容中去，也就是index.html中
  template: '<App/>'
})
