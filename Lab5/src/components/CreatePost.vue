<template>
  <div class="mb-5">
    <h2 class="mb-4">Tạo bài viết mới</h2>

    <div class="mb-3">
      <input
        v-model="post.title"
        class="form-control"
        placeholder="Tiêu đề bài viết"
      />
    </div>

    <div class="mb-3">
      <input
        v-model="post.author"
        class="form-control"
        placeholder="Tên tác giả"
      />
    </div>

    <div class="mb-3">
      <textarea
        v-model="post.content"
        class="form-control"
        rows="4"
        placeholder="Nội dung bài viết"
      ></textarea>
    </div>

    <button class="btn btn-primary" @click="submitPost">
      Đăng bài
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add-post'])

const post = reactive({
  title: '',
  author: '',
  content: ''
})

const submitPost = () => {
  if (!post.title || !post.author || !post.content) return

  emit('add-post', { ...post })

  post.title = ''
  post.author = ''
  post.content = ''
}
</script>
