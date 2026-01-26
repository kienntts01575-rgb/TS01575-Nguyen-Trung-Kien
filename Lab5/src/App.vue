<template>
  <!-- <div class="container mt-5">
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div> -->
  <bai1 />
</template>

<script setup>
import { reactive } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = reactive([
  {
    title: 'Bật Mí 8 Nguyên Tắc Phối Màu Quần Áo Sành Điệu',
    author: 'Nguyễn Văn Tèo',
    content:
      'Bạn có thể phối áo màu xanh lá, quần màu kem và giày màu tím theo cách phối màu kiểu tam giác...',
    highlight: false,
    bgColor: '#ffffff'
  }
])

const addPost = (post) => {
  posts.unshift({
    ...post,
    highlight: false,
    bgColor: '#ffffff'
  })
}

import bai3 from './components/bai3.vue'
import bai2 from './components/bai2.vue'
import bai1 from './components/bai1.vue'
</script>
