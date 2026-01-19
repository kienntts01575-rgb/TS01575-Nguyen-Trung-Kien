<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3 class="text-center mb-3">Đăng ký</h3>

    <form @submit.prevent="handleRegister">
      <input v-model="name" class="form-control mb-2" placeholder="Họ tên" />
      <input v-model="email" class="form-control mb-2" placeholder="Email" />
      <input v-model="password" type="password"
             class="form-control mb-3" placeholder="Mật khẩu" />

      <button class="btn btn-primary w-100">Đăng ký</button>
    </form>
  </div>
</template>

<script>
import { register } from "../services/auth"

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    handleRegister() {
      const user = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        password: this.password
      }

      register(user)
      alert("Đăng ký thành công!")
      this.$router.push("/login")
    }
  }
}
</script>
