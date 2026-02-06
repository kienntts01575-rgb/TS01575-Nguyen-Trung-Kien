<template>
  <div class="wrapper">
    <!-- FORM ĐĂNG NHẬP -->
    <div v-if="!isLoggedIn">
      <h2>Form Đăng nhập</h2>

      <form @submit.prevent="login">
        <label>Email:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nhập email"
          v-model="email"
        />
        <p v-if="emailError" class="error">{{ emailError }}</p>

        <label>Mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Nhập mật khẩu"
          v-model="password"
        />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>

        <button type="submit" class="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </div>

    <!-- SAU KHI ĐĂNG NHẬP -->
    <div v-else>
      <h2>Chào mừng, {{ email }}!</h2>
      <button class="btn btn-primary" @click="logout">
        Đăng xuất
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const isLoggedIn = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {
  // reset lỗi
  emailError.value = ''
  passwordError.value = ''

  // validate email
  if (!email.value) {
    emailError.value = 'Email không được để trống'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không đúng định dạng'
  }

  // validate mật khẩu
  if (!password.value) {
    passwordError.value = 'Mật khẩu không được để trống'
  }

  // nếu hợp lệ
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
  emailError.value = ''
  passwordError.value = ''
}
</script>

<style scoped>
.wrapper {
  width: 400px;
  margin: 40px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  font-weight: 600;
  display: block;
  margin-top: 10px;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.btn {
  margin-top: 15px;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background: #0d6efd;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}
</style>
