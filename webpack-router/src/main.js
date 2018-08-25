//入口文件
//console.log('ok')
import Vue from 'vue'
//1.导入vue-router
import VueRouter from 'vue-router'
//2.手动安装vuerouter
Vue.use(VueRouter)
//3.创建路由对象
import app from './app.vue'

//导入account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
  routes: [
    // account  goodslist
    { path: '/account', component: account },
    { path: '/goodslist', component: goodslist }
  ]
})

var vm = new Vue({
  el: '#app',
  render: c => c(app), 
  // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router // 4. 将路由对象挂载到 vm 上
})