<!-- <template>
<p>Name: <input type="text" value="name"></p>
<a class='btn btn-primary' v-bind:href="url">click me</a>
</template>
<script setup>
const name = 'Vue';
const url = 'https://www.google.com/';
</script> -->

<!-- <template>
<input type="text" v-model="text">
<p>Xin chào {{ text }}</p>
</template>
<script setup>
import { ref } from 'vue';
const text = ref('VueJS');
</script> -->


<template>
<div :class="{ highlighted: isHighlighted }" :style="{ backgroundColor: bgColor }">
Kết hợp Class và Style Binding
</div>
<button class="btn btn-dark" @click="toggleHighlight">Toggle Highlight</button>
<button class="btn btn-dark" @click="toggleBgColor">Toggle Background Color</button>
</template>
<script setup>
import { ref } from 'vue';
const isHighlighted = ref(false);
const bgColor = ref('lightgray');
const toggleHighlight = () => {
isHighlighted.value = !isHighlighted.value;
}
const toggleBgColor = () => {
bgColor.value = bgColor.value === 'lightgray' ? 'lightpink' : 'lightgray';
}
</script>
<style>.highlighted {font-weight: bold; color: darkorchid;}</style>
