import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'



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
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
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
      component: () => import('../views/Category/AddCategory.vue')
    },
    {
      path: '/admin/category',
      name: 'Category',
      component: () => import('../views/Category/Category.vue')
    },
    {
      path: '/admin/product/new',
      name: 'AddProduct',
      component: () => import('../views/Ad-Products/AddProducts.vue')
    },
    {
      path: '/admin/product',
      name: 'AdmProduct',
      component: () => import('../views/Ad-Products/AdminProducts.vue')
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
