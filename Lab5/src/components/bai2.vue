<template>
  <div class="p-5">
    <input
      type="text"
      class="form-control mb-3"
      v-model="userInput"
      placeholder="Nhập dữ liệu vào đây"
    />

    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Biến dùng để binding 2 chiều
const userInput = ref('')
</script>
