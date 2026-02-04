<template>
  <div>
    <h2>Danh sách Blog</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="`/blog/${blog.id}`">
          {{ blog.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const blogs = [
  { id: 1, title: 'Vue Router Cơ Bản' },
  { id: 2, title: 'Routes Động trong Vue' },
  { id: 3, title: 'Bảo vệ Route' }
]
</script>
