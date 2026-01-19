<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentUser = computed(() =>
  JSON.parse(localStorage.getItem('currentUser'))
)

const isAuthPage = computed(() =>
  route.path === '/login' || route.path === '/register'
)

const logout = () => {
  localStorage.removeItem('currentUser')
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid px-4">
      <router-link class="navbar-brand" to="/">MyBlog</router-link>

      <ul class="navbar-nav ms-auto">
        <template v-if="!currentUser">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </template>

        <template v-else-if="!isAuthPage">
          <li class="nav-item">
            <router-link class="nav-link" to="/create-post">Đăng bài</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-sm btn-danger ms-2" @click="logout">
              Logout
            </button>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
