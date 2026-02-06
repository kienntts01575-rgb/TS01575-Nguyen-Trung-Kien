<template>
  <div style="max-width: 300px;">
    <h3>Xếp loại học sinh</h3>

    <input type="number" v-model="dtb" placeholder="Nhập điểm trung bình" step="0.1" />

    <p v-if="dtb < 5">Xếp loại: Yếu</p>
    <p v-else-if="dtb < 6.5">Xếp loại: Trung bình</p>
    <p v-else-if="dtb < 8">Xếp loại: Khá</p>
    <p v-else-if="dtb < 9">Xếp loại: Giỏi</p>
    <p v-else>Xếp loại: Xuất sắc</p>

    <p v-if="dtb >= 5">
      ket qua: dat
    </p>
    <p v-else>
      ket qua: rot
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dtb = ref(0)
</script>
