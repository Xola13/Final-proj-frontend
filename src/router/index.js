import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



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
