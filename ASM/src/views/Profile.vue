<script setup>
import { ref } from 'vue'

const user = ref(JSON.parse(localStorage.getItem('currentUser')))

const name = ref(user.value.name)
const email = ref(user.value.email)
const password = ref(user.value.password)

const updateProfile = () => {
  user.value.name = name.value
  user.value.email = email.value
  user.value.password = password.value

  // cập nhật currentUser
  localStorage.setItem('currentUser', JSON.stringify(user.value))

  // cập nhật trong danh sách users
  const users = JSON.parse(localStorage.getItem('users')) || []
  const index = users.findIndex(u => u.email === user.value.email)
  if (index !== -1) {
    users[index] = user.value
    localStorage.setItem('users', JSON.stringify(users))
  }

  alert('Cập nhật thông tin thành công!')
}
</script>

<template>
  <div class="container mt-4" v-if="user">
    <h3>👤 Thông tin cá nhân</h3>

    <form @submit.prevent="updateProfile" class="mt-3">
      <div class="mb-3">
        <label class="form-label">Họ tên</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          required
          disabled
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Mật khẩu</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>

      <button class="btn btn-success">
        Lưu thay đổi
      </button>
    </form>
  </div>
</template>
