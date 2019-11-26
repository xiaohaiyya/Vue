import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
//第三种导出导入的方式
import {actions} from './actions'
// import getters from './getters'
Vue.use(Vuex)

//配置vuex，store存储器用来存储组件之间共享的资源
const store = new Vuex.Store({
    //state状态值，类似于组件中的data数据源
    state ,
    //修改状态的方法（共享方法），类似于组件中的methods
    // mutations 只能做同步操作，不能异步执行
    mutations,
    //actions类似于mutation，不同在于actions提交的是mutation,而不是直接变更状态，actions可以包含任何异步操作
    actions,
    //类似于组件中的computed，依赖于state创建共享属性，该方法对state的数据做处理
    // getters
  });
  //导出存储对象store，给外界使用
  export default store;