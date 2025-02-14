import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/index';

// Créer l'application
const app = createApp(App);

// Ajouter les plugins
app.use(createPinia());
app.use(router);

// Monter l'application sur l'élément avec l'ID #app
app.mount('#app');
