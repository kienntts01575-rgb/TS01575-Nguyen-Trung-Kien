// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import components for your routes
import Home from '../view/HomeView.vue';
import About from '../view/AboutView.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];
const router = createRouter({
    history: createWebHistory(),

    routes
});
export default router;