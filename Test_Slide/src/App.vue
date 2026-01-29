<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import trang from './components/trang.vue'
import test from './components/test.vue';
import Slide5Bai1 from './components/Slide5-bai1.vue';
import slide6 from './components/slide6.vue';
</script>

<template>
  
  <slide6 msg="18 - Nguyen Trung Kien" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<script setup>
import { ref } from 'vue'
import NhapSanPham from './components/NhapSanPham.vue'
import DanhSachSanPham from './components/DanhSachSanPham.vue'

const hardwareList = ref([
  {
    name: "CPU AMD Ryzen 9 7950X",
    description: "Vi xử lý 16 nhân 32 luồng, xung nhịp lên tới 5.7GHz.",
    price: 14500000,
  },
  {
    name: "Card đồ họa NVIDIA RTX 4090",
    description: "GPU mạnh mẽ nhất hiện nay với 24GB VRAM.",
    price: 52000000,
  }
])

const themSanPham = (sp) => {
  hardwareList.value.push(sp)
}
</script>

<template>
  <div>
    <NhapSanPham @them-san-pham="themSanPham" />
    <DanhSachSanPham :danhSach="hardwareList" />
  </div>
</template>