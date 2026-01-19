<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = Number(route.params.id)

const post = ref(null)
const comments = ref([])
const commentText = ref('')

const currentUser = JSON.parse(localStorage.getItem('currentUser'))

onMounted(() => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  post.value = posts.find(p => p.id === postId)

  if (!post.value) {
    alert('Bài viết không tồn tại')
    return
  }

  if (!post.value.likes) {
    post.value.likes = []
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  const allComments = JSON.parse(localStorage.getItem('comments')) || []
  comments.value = allComments.filter(c => c.postId === postId)
})

const isLiked = computed(() => {
  if (!currentUser || !post.value) return false
  return post.value.likes.includes(currentUser.email)
})

const toggleLike = () => {
  if (!currentUser) return alert('Vui lòng đăng nhập')

  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const index = posts.findIndex(p => p.id === postId)

  if (index === -1) return

  const likes = posts[index].likes || []

  if (likes.includes(currentUser.email)) {
    posts[index].likes = likes.filter(e => e !== currentUser.email)
  } else {
    posts[index].likes.push(currentUser.email)
  }

  localStorage.setItem('posts', JSON.stringify(posts))
  post.value = posts[index]
}

const addComment = () => {
  if (!commentText.value.trim()) return

  const newComment = {
    id: Date.now(),
    postId,
    author: currentUser.name,
    authorEmail: currentUser.email,
    content: commentText.value,
    createdAt: new Date().toLocaleString()
  }

  comments.value.push(newComment)

  const allComments = JSON.parse(localStorage.getItem('comments')) || []
  allComments.push(newComment)
  localStorage.setItem('comments', JSON.stringify(allComments))

  commentText.value = ''
}
</script>

<template>
  <div class="container mt-4" v-if="post">
    <h3 class="fw-bold">{{ post.title }}</h3>

    <p class="text-muted">
      ✍ {{ post.author }} · {{ new Date(post.createdAt).toLocaleString('vi-VN') }}
    </p>

    <img
      v-if="post.image"
      :src="post.image"
      class="img-fluid rounded mb-4"
    />

    <p class="fs-5">{{ post.content }}</p>

    <button
      class="btn btn-sm me-2"
      :class="isLiked ? 'btn-danger' : 'btn-outline-danger'"
      @click="toggleLike"
    >
      ❤️ {{ post.likes.length }}
    </button>

    <hr />

    <h5>Bình luận</h5>

    <div v-if="currentUser" class="mb-3">
      <textarea
        class="form-control mb-2"
        rows="3"
        v-model="commentText"
      ></textarea>

      <button class="btn btn-primary btn-sm" @click="addComment">
        Gửi bình luận
      </button>
    </div>

    <ul class="list-group mt-3">
      <li
        v-for="c in comments"
        :key="c.id"
        class="list-group-item"
      >
        <strong>{{ c.author }}</strong>
        <small class="text-muted"> · {{ c.createdAt }}</small>
        <div>{{ c.content }}</div>
      </li>
    </ul>
  </div>
</template>
