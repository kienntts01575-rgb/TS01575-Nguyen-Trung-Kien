<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3 class="text-center mb-3">Đăng nhập</h3>

    <form @submit.prevent="handleLogin">
      <input v-model="email" class="form-control mb-2" placeholder="Email" />
      <input v-model="password" type="password"
             class="form-control mb-3" placeholder="Mật khẩu" />

      <button class="btn btn-success w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import { login } from "../services/auth"

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    handleLogin() {
      const user = login(this.email, this.password)

      if (user) {
        alert("Đăng nhập thành công!")
        this.$router.push("/")
      } else {
        alert("Sai email hoặc mật khẩu")
      }
    }
  }
}
</script>
