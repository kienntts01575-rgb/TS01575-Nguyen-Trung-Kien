import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetail from '../views/PostDetail.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/post/:id', component: PostDetail },
  {
    path: '/create-post',
    component: CreatePost,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ CHỈ 1 GUARD
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('currentUser')

  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
