import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
