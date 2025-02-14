import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue'; // Assure-toi que le chemin est correct

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'), // Remplace par ton vrai composant Home
  },
  {
    path: '/:pathMatch(.*)*', // Capture toutes les routes non définies
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;