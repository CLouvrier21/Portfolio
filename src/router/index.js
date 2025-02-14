import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*', 
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
});

export default router;
