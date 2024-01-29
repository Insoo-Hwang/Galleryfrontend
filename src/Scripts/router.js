import Home from "@/Pages/Home.vue";
import Login from "@/Pages/Login.vue";
import Cart from "@/Pages/Cart.vue";
import Order from "@/Pages/Order.vue";
import Orders from "@/Pages/Orders.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;