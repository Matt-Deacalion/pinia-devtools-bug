import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia();
pinia.use(({ store }) => store.$patch({ name: 'Lucy' }));

const app = createApp(App).use(pinia).mount('#app');
