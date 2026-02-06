<template>
  <div class="comment-box">
    <h3>Bình luận bài viết</h3>

    <!-- Bài viết -->
    <div class="post">
      <img
        src="../assets/images/img4.jpg"
        
      />

      <h4>8 loại rau củ quả giàu canxi</h4>
      <p>
        Canxi là khoáng chất cần thiết đối với cơ thể người.
        Có nhiều cách để bổ sung canxi, trong đó bổ sung qua
        đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...
      </p>
    </div>

    <!-- Nhập bình luận -->
    <textarea
      v-model="comment"
      placeholder="Nhập bình luận của bạn"
    ></textarea>

    <button @click="addComment">Gửi bình luận</button>

    <!-- Danh sách bình luận -->
    <div class="list">
      <b>Danh sách các bình luận:</b>
      <ul>
        <li v-for="(c, index) in comments" :key="index">
          <b>{{ username }}:</b> {{ c }}
        </li>
      </ul>
    </div>

    <button class="logout" @click="emit('logout')">
      Đăng xuất
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  username: String
})

const emit = defineEmits(['logout'])

const comment = ref('')
const comments = ref([])

const addComment = () => {
  if (comment.value.trim() !== '') {
    comments.value.push(comment.value)
    comment.value = ''
  }
}
</script>

<style scoped>
.comment-box {
  width: 500px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 15px;
  font-family: Arial, sans-serif;
}

h3 {
  margin-bottom: 10px;
}

.post img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.post h4 {
  margin: 8px 0;
}

.post p {
  font-size: 14px;
  color: #444;
}

textarea {
  width: 100%;
  height: 70px;
  margin-top: 10px;
  padding: 8px;
}

button {
  margin-top: 10px;
  padding: 6px 12px;
  background: #198754;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.list {
  margin-top: 15px;
}

.list ul {
  padding-left: 20px;
}

.logout {
  background: #dc3545;
  margin-top: 15px;
}
</style>
