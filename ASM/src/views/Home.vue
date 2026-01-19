<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

onMounted(() => {
  posts.value = JSON.parse(localStorage.getItem('posts')) || []
})

const deletePost = (id) => {
  if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return

  posts.value = posts.value.filter(p => p.id !== id)
  localStorage.setItem('posts', JSON.stringify(posts.value))
}

// format ngày giờ cho đẹp
const formatDate = (date) => {
  return new Date(date).toLocaleString('vi-VN')
}
</script>

<template>
  <div class="container-fluid px-5 mt-4">
    <div class="row">
      <div class="col-lg-8 mx-auto">
    <h3 class="mb-3">📰 Danh sách bài viết</h3>

    <!-- Không có bài -->
    <div v-if="posts.length === 0" class="alert alert-info">
      Chưa có bài viết nào
    </div>

    <!-- Có bài -->
    <div
      v-for="post in posts"
      :key="post.id"
      class="card mb-4 shadow-sm"
    >
      <!-- ẢNH BÀI VIẾT -->
    <img
    v-if="post.image"
    :src="post.image"
    class="card-img-top post-image"
  />

  <div class="card-body">
    <h5 class="card-title">{{ post.title }}</h5>

    <p class="text-muted small mb-2">
      ✍ {{ post.author }} · {{ formatDate(post.createdAt) }}
    </p>

    <p class="card-text text-truncate">
      {{ post.content }}
    </p>

    <div class="d-flex gap-2">
      <router-link
        :to="`/post/${post.id}`"
        class="btn btn-sm btn-outline-primary"
      >
        Xem chi tiết
      </router-link>

      <button
        v-if="currentUser && post.authorEmail === currentUser.email"
        class="btn btn-sm btn-outline-danger"
        @click="deletePost(post.id)"
      >
        Xóa
      </button>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>
