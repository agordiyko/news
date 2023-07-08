import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';

import Home from "./pages/home.vue";
import News from "./pages/news.vue";
import Add from "./pages/add.vue";

import "./assets/main.css";

const routes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/add', component: Add},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount("#app");
