<template>
  <div>
    <h2>Chi tiết blog</h2>
    <p>ID bài viết: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
