import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router';
import ToDoList from "./pages/ToDoList.vue";
import WishList from "./pages/WishList.vue";

const app = createApp(App);

const routes = [
    {path:"/todo", component: ToDoList},
    {path:"/wishlist", component: WishList},
    {path:"/:pathMatch(.*)*", redirect: "/todo"}//For incorrect paths
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
});

app.use(router);

app.mount('#app');