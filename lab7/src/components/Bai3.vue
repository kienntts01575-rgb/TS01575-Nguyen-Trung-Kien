<template>
  <div class="container">
    <!-- FORM ĐĂNG KÝ -->
    <div class="form-box">
      <h2>Form Đăng Ký</h2>

      <label>Họ tên:</label>
      <input type="text" v-model="form.name" />

      <label>Email:</label>
      <input type="email" v-model="form.email" />

      <label>Mật khẩu:</label>
      <input type="password" v-model="form.password" />

      <label>Ngày sinh:</label>
      <input type="date" v-model="form.birth" />

      <label>Giới tính:</label>
      <div class="inline">
        <input type="radio" value="Nam" v-model="form.gender" /> Nam
        <input type="radio" value="Nữ" v-model="form.gender" /> Nữ
        <input type="radio" value="Khác" v-model="form.gender" /> Khác
      </div>

      <label>Ngôn ngữ:</label>
      <div class="inline">
        <input type="checkbox" value="Tiếng Việt" v-model="form.languages" /> Tiếng Việt
        <input type="checkbox" value="Tiếng Anh" v-model="form.languages" /> Tiếng Anh
        <input type="checkbox" value="Tiếng Nhật" v-model="form.languages" /> Tiếng Nhật
      </div>

      <button @click="register">Đăng ký</button>
    </div>

    <!-- THÔNG TIN ĐÃ ĐĂNG KÝ -->
    <div class="info-box" v-if="submitted">
      <h2>Thông tin đã đăng ký:</h2>
      <p><b>Họ tên:</b> {{ result.name }}</p>
      <p><b>Email:</b> {{ result.email }}</p>
      <p><b>Ngày sinh:</b> {{ result.birth }}</p>
      <p><b>Giới tính:</b> {{ result.gender }}</p>
      <p><b>Ngôn ngữ:</b> {{ result.languages.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: '',
  birth: '',
  gender: '',
  languages: []
})

const result = reactive({
  name: '',
  email: '',
  birth: '',
  gender: '',
  languages: []
})

const register = () => {
  result.name = form.name
  result.email = form.email
  result.birth = form.birth
  result.gender = form.gender
  result.languages = [...form.languages]

  submitted.value = true
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 30px;
  width: 900px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-box,
.info-box {
  width: 50%;
}

h2 {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.inline {
  margin-top: 5px;
}

.inline input {
  margin-right: 5px;
}

button {
  margin-top: 15px;
  padding: 8px 14px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
