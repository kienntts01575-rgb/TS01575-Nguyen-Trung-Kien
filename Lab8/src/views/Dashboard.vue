<template>
  <div>
    <h2>Dashboard</h2>
    <p>Dang nhap thanh cong</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  localStorage.removeItem('auth')
  router.push({ name: 'Login' })
}
</script>