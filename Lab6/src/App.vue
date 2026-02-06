<script setup>
import HelloWorld from './components/HelloWorld.vue'
import bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import bai3 from './components/bai3.vue';
import bai4 from './components/bai4.vue';
</script>

<template>
  <bai1 />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
