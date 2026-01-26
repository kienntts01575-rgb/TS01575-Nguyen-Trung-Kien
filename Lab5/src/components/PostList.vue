<template>
  <div>
    <h2 class="mb-4">Danh sách bài viết</h2>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="border rounded p-4 mb-4"
      :class="{ highlight: post.highlight }"
      :style="{ backgroundColor: post.bgColor }"
    >
      <h3 class="title">{{ post.title }}</h3>
      <p class="author">{{ post.author }}</p>
      <p>{{ post.content }}</p>

      <button
        class="btn btn-sm btn-outline-secondary me-2"
        @click="toggleStyle(post)"
      >
        Đổi kiểu
      </button>

      <button
        class="btn btn-sm btn-outline-success"
        @click="changeColor(post)"
      >
        Đổi màu
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})

const toggleStyle = (post) => {
  post.highlight = !post.highlight
}

const changeColor = (post) => {
  post.bgColor =
    post.bgColor === '#d1e7dd' ? '#cff4fc' : '#d1e7dd'
}

</script>

<style scoped>
.title {
  color: #198754; /* xanh lá giống hình */
  font-weight: bold;
}

.author {
  color: #dc3545; /* đỏ giống hình */
  font-weight: 500;
}

.highlight {
  border: 2px solid #198754;
}
</style>
