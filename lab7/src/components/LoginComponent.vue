<template>
  <div class="box">
    <h3>Đăng nhập</h3>

    <form @submit.prevent="handleLogin">
      <label>Tên đăng nhập:</label>
      <input type="text" v-model="username" />

      <label>Mật khẩu:</label>
      <input type="password" v-model="password" />

      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])

const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value && password.value) {
    emit('login', username.value)
  }
}
</script>

<style scoped>
.box {
  width: 300px;
  margin: 40px auto;
  border: 1px solid #ccc;
  padding: 20px;
}

input {
  width: 100%;
  margin: 6px 0;
  padding: 6px;
}

button {
  margin-top: 10px;
}
</style>
