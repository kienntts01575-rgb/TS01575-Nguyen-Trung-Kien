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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}
</script>

<template>
  <div class="container-fluid px-4 mt-4">
    <div class="row">
      <div class="col-xl-7 col-lg-8 col-md-10 mx-auto">

        <h4 class="mb-4 fw-bold">📰 Danh sách bài viết</h4>

        <!-- Không có bài -->
        <div v-if="posts.length === 0" class="alert alert-info">
          Chưa có bài viết nào
        </div>

        <!-- Danh sách bài -->
        <div
          v-for="post in posts"
          :key="post.id"
          class="post-item mb-3 p-3 rounded shadow-sm bg-white"
        >
          <div class="d-flex gap-3">

            <!-- Ảnh -->
            <img
              v-if="post.image"
              :src="post.image"
              class="post-thumb"
            />

            <!-- Nội dung -->
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-1">
                {{ post.title }}
              </h6>

              <p class="text-muted small mb-1">
                ✍ {{ post.author }} · {{ formatDate(post.createdAt) }}
              </p>

              <p class="text-secondary text-truncate-2 mb-2">
                {{ post.content }}
              </p>

              <div class="d-flex align-items-center gap-2">
                <router-link
                  :to="`/post/${post.id}`"
                  class="btn btn-sm btn-outline-primary"
                >
                  Xem chi tiết
                </router-link>

                <!-- Nút xóa (áp dụng cho bài cũ + mới) -->
                <button
                  v-if="
                    currentUser &&
                    (
                      post.authorEmail === currentUser.email ||
                      post.author === currentUser.name
                    )
                  "
                  class="btn btn-sm btn-outline-danger"
                  @click="deletePost(post.id)"
                >
                  Xóa
                </button>

                <span class="ms-auto text-muted small">
                  ❤️ {{ post.likes?.length || 0 }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.post-thumb {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-item {
  transition: all 0.2s ease;
}

.post-item:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
}
</style>
