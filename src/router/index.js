import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/login',
    name: 'Login',
    component: () => import('../views/Login.vue')

  },
  {
    path:'/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path:'/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path:'/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },

     // Admin homepage

     {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/category/add',
      name: 'AddCategory',
      component: AddCategory
    },
    {
      path: '/admin/category',
      name: 'Category',
      component: Category
    }



//   {
//   path:'/admin',
//   name: 'Admin',
//   component: Admin,
//   beforeEnter(to, from, next) {
//     let currentUser = JSON.parse(window.localStorage.currentUser);
//     if(currentUser && currentUser.admin) {
//       next();
//     }else {
//       next("/");
//     }
//   },
//   children: [
//     {
//       path:'/AdminProducts',
//       name:'AdminProducts',
//       component: AdminProducts
//     }
//   ]
// },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
