import { createRouter, createWebHistory } from "vue-router";
import { HomeView, AdminView, CustomerView, AccountView, TrayView } from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/", name: "admin", component: AdminView },
  { path: "/", name: "customer", component: CustomerView },
  { path: "/account", name: "account", component: AccountView },
  { path: "/tray", name: "tray", component: TrayView },

];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });


export default router;
