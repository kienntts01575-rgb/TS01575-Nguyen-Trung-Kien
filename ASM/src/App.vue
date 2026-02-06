<script setup>
import Navbar from './components/Navbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <Navbar />
    <div class="pt-5 mt-3">
  <main class="main-content">
    <router-view />
  </main>
  </div>
</template>

<style>
.main-content {
  min-height: calc(100vh - 56px); /* chiều cao navbar */
  padding: 24px;
}

.main-content {
  min-height: calc(100vh - 56px);
  padding: 24px;
  background-color: #f5f6f8;
}
</style>

