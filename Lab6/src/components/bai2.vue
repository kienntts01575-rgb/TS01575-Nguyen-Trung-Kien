<template>
  <div class="container mt-3">
    <div class="card p-3">
      <h4 class="mb-3">Xác định mùa trong năm</h4>

      <input
        type="number"
        v-model="month"
        class="form-control mb-2"
        placeholder="Nhập tháng (1 - 12)"
      />

      <p v-if="month < 1 || month > 12" class="text-danger">
        Vui lòng nhập tháng từ 1 đến 12!
      </p>
      <p v-else-if="month <= 3">Mùa: Xuân</p>
      <p v-else-if="month <= 6">Mùa: Hạ</p>
      <p v-else-if="month <= 9">Mùa: Thu</p>
      <p v-else>Mùa: Đông</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const month = ref(0)
</script>
