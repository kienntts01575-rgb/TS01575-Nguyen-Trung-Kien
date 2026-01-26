<template>
  <div class="col-sm-8 mx-auto p-4 border rounded">
    <h1 class="mb-4">Thông tin cá nhân</h1>

    <form>
      <div class="mb-3">
        <label class="form-label">Họ và Tên:</label>
        <input
          v-model="userInfo.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ và tên"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Tuổi:</label>
        <input
          v-model="userInfo.age"
          type="number"
          class="form-control"
          placeholder="Nhập tuổi"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input
          v-model="userInfo.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        />
      </div>
    </form>

    <!-- Hiển thị dữ liệu theo thời gian thực -->
    <div class="mt-4 p-4 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Đối tượng reactive lưu thông tin cá nhân
const userInfo = reactive({
  name: '',
  age: '',
  email: ''
})
</script>
