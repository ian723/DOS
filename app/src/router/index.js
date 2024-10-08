import { createRouter, createWebHistory } from "vue-router";
import { HomeView, AdminView, CustomerView } from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/", name: "admin", component: AdminView },
  { path: "/", name: "customer", component: CustomerView },

];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });


export default router;
