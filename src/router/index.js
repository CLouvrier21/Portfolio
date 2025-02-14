import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Ici, routes est bien défini
});

export default router;
