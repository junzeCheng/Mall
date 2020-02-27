import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Home = ()=> import("views/home/Home.vue")
const Category = ()=> import("views/category/Category.vue")
const Shopcart = ()=> import("views/shopcart/ShopCart.vue")
const Profile = ()=> import("views/profile/Profile.vue")

Vue.use(Router)

const routes=[
  {
    path: '',
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/profile",
    component: Profile
  }
]
export default new Router({
  routes,
  mode : "history"
})
