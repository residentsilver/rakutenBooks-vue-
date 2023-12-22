import { createRouter , createWebHistory } from 'vue-router'
// 静的インポート　最初からファイルを読み込む
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path :'/',
  //   name: 'Home' ,
  //   component: Home
  // },
  {
    path:'/add',
    name:'Add',
    // ()=> import() 動的インポート、必要になったら読み込む
    component: ()=>import('../views/Add.vue')
  },
  {
    path :'/home',
    name: 'Home' ,
    component: ()=>import('../views/Home.vue')
  },
]

//ルーター生成
const router =createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './components/Book.vue'
// import Test from './components/createBook.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     { path: '/', component: Home },
//     { path: '/test', component: Test }
//   ]
// })