import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  CustomerView,
  AccountView,
  TrayView,
  DashboardView,
  OrderView,
  AdminView,
  PreparingView,
  DeliveryView,
  PaymentView,
  AnalysisView,
  RatesView,
  DashView,
  LoginView,
  FoodOrderView,
  HistoryView,
  ReviewsView,
  RegisterView,
} from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/register", name: "register", component: RegisterView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
  { path: "/orders", name: "order", component: OrderView },
  { path: "/customer", name: "customer", component: CustomerView },
  { path: "/account", name: "account", component: AccountView },
  { path: "/tray", name: "tray", component: TrayView },
  { path: "/admin", name: "admin", component: AdminView },
  { path: "/preparing", name: "prepare", component: PreparingView },
  { path: "/delivery", name: "deliver", component: DeliveryView },
  { path: "/payment", name: "payment", component: PaymentView },
  { path: "/analysis", name: "analysis", component: AnalysisView },
  { path: "/rates", name: "r&r", component: RatesView },
  { path: "/dash", name: "dash", component: DashView },
  { path: "/order", name: "food", component: FoodOrderView },
  { path: "/history", name: "history", component: HistoryView },
  { path: "/review", name: "rates", component: ReviewsView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  /**add function to check if user is logged in */

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
