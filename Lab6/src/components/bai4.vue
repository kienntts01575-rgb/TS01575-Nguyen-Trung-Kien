<template>
  <div class="container mt-4 border p-4">
    <div class="row">

      <!-- CỘT TRÁI: FORM -->
      <div class="col-md-4">
        <h4>Thêm học sinh</h4>

        <form @submit.prevent="saveStudent">
          <div class="mb-3">
            <label class="form-label">Họ tên:</label>
            <input type="text" class="form-control" v-model="student.name" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Điểm:</label>
            <input type="number" class="form-control" v-model="student.score" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Ngày sinh:</label>
            <input type="date" class="form-control" v-model="student.dob" required />
          </div>

          <button class="btn btn-success">
            {{ isEdit ? 'Cập nhật' : 'Thêm' }}
          </button>
        </form>
      </div>

      <!-- CỘT PHẢI: DANH SÁCH -->
      <div class="col-md-8">
        <h4>Danh sách học sinh</h4>

        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>TT</th>
              <th>Ngày sinh</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(s, index) in students" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ s.name }}</td>
              <td>{{ s.score }}</td>
              <td>
                <span v-if="s.score >= 5" class="badge bg-success">
                  Đạt
                </span>
                <span v-else class="badge bg-danger">
                  Rớt
                </span>
              </td>
              <td>{{ s.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">
                  Sửa
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>

            <tr v-if="students.length === 0">
              <td colspan="4">Chưa có học sinh</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

const student = ref({
  name: '',
  score: '',
  dob: ''
})

const isEdit = ref(false)
const editIndex = ref(null)

const resetForm = () => {
  student.value = { name: '', score: '', dob: '' }
  isEdit.value = false
  editIndex.value = null
}

const saveStudent = () => {
  if (isEdit.value) {
    students.value[editIndex.value] = { ...student.value }
  } else {
    students.value.push({ ...student.value })
  }
  resetForm()
}

const editStudent = (index) => {
  student.value = { ...students.value[index] }
  isEdit.value = true
  editIndex.value = index
}

const deleteStudent = (index) => {
  if (confirm('Bạn có chắc muốn xóa?')) {
    students.value.splice(index, 1)
  }
}
</script>
