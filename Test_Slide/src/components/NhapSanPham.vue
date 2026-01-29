<script setup>
import { ref } from 'vue'

const emit = defineEmits(['them-san-pham'])

const name = ref('')
const description = ref('')
const price = ref('')

const themSanPham = () => {
  if (!name.value || !price.value) return

  const sanPhamMoi = {
    name: name.value,
    description: description.value,
    price: Number(price.value)
  }

  emit('them-san-pham', sanPhamMoi)

  // reset form
  name.value = ''
  description.value = ''
  price.value = ''
}
</script>

<template>
  <div>
    <h3>Nhập sản phẩm</h3>

    <input v-model="name" placeholder="Tên sản phẩm" />
    <br />

    <textarea v-model="description" placeholder="Mô tả"></textarea>
    <br />

    <input v-model="price" type="number" placeholder="Giá" />
    <br />

    <button @click="themSanPham">Thêm sản phẩm</button>
  </div>
</template>