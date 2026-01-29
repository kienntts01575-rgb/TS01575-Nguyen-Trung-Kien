<script setup>
const props = defineProps({
  danhSach: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <h3>Danh sách sản phẩm</h3>

    <ul>
      <li v-for="(item, index) in danhSach" :key="index">
        <b>{{ item.name }}</b><br />
        {{ item.description }}<br />
        💰 {{ item.price.toLocaleString() }} VND
        <hr />
      </li>
    </ul>
  </div>
</template>