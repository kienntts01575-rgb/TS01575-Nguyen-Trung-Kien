<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const image = ref(null)

const handleImage = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    image.value = reader.result
  }
  reader.readAsDataURL(file)
}

const submitPost = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  if (!user) return

  const posts = JSON.parse(localStorage.getItem('posts')) || []

  posts.push({
    id: Date.now(),
    title: title.value,
    content: content.value,
    image: image.value,              // 👈 LƯU ẢNH
    author: user.name,
    authorEmail: user.email,
    likes: [],
    createdAt: new Date().toISOString()
  })

  localStorage.setItem('posts', JSON.stringify(posts))
  router.push('/')
}
</script>

<template>
  <div class="container mt-4">
    <div class="card-body">
    <h4 class="mb-3">✍️ Đăng bài</h4>

    <form @submit.prevent="submitPost">
      <div class="mb-3">
        <label class="form-label">Tiêu đề</label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Nội dung</label>
        <textarea
          class="form-control"
          rows="5"
          v-model="content"
          required
        ></textarea>
      </div>

      <!-- UPLOAD ẢNH -->
      <div class="mb-3">
        <label class="form-label">Ảnh minh họa</label>
        <input
          type="file"
          class="form-control"
          accept="image/*"
          @change="handleImage"
        />
      </div>

      <!-- PREVIEW ẢNH -->
      <div v-if="image" class="mb-3">
        <img
          :src="image"
          class="img-fluid rounded"
          style="max-height: 300px"
        />
      </div>

      <button class="btn btn-primary">Đăng bài</button>
    </form>
    </div>
  </div>
</template>
