<template>
  <LoginComponent
    v-if="!isLoggedIn"
    @login="handleLogin"
  />

  <CommentComponent
    v-else
    :username="username"
    @logout="handleLogout"
  />
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue'
import CommentComponent from './CommentComponent.vue'

const isLoggedIn = ref(false)
const username = ref('')

const handleLogin = (name) => {
  username.value = name
  isLoggedIn.value = true
}

const handleLogout = () => {
  username.value = ''
  isLoggedIn.value = false
}
</script>
