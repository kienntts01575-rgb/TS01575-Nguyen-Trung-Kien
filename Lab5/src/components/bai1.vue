<template>
  <div class="p-5">
    <p>{{ message }}</p>

    <button class="btn btn-dark" @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Biến message với giá trị mặc định
const message = ref('Thông điệp ban đầu')

// Hàm xử lý sự kiện click
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'
}
</script>
