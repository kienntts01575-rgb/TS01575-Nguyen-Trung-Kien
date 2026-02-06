<template>
  <div class="wrapper">
    <h2>Quản lý công việc</h2>

    <!-- Form thêm công việc -->
    <form @submit.prevent="addJob">
      <label class="form-label">Tên công việc:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Nhập tên công việc"
        v-model="newJob"
      />

      <button type="submit" class="btn btn-primary">
        Thêm công việc
      </button>
    </form>

    <!-- Danh sách công việc -->
    <ul class="job-list">
      <li v-for="(job, index) in jobs" :key="index">
        <span>{{ job }}</span>
        <button class="btn btn-danger" @click="deleteJob(index)">
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newJob = ref('')
const jobs = ref([
  'Ăn sáng',
  'Đi học',
  'Chơi bóng rổ'
])

const addJob = () => {
  if (newJob.value.trim() !== '') {
    jobs.value.push(newJob.value)
    newJob.value = ''
  }
}

const deleteJob = (index) => {
  jobs.value.splice(index, 1)
}
</script>

<style scoped>
.wrapper {
  width: 420px;
  margin: 40px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-label {
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
  margin-bottom: 20px;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.job-list {
  list-style: none;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.job-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.job-list li:last-child {
  border-bottom: none;
}
</style>
