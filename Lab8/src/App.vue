<template>
  <div>
    <h1>MyBlog</h1>

    <nav style="margin-bottom: 20px;">
      <router-link to="/">Home</router-link> |
      <router-link to="/blogs">Blog</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav a {
  margin-right: 10px;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  color: blue;
}
</style>
