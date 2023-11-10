import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import MainPage from "./components/MainPage.vue"; // Import the MainPage component
import TraditionalBuildingsPage from "./components/TraditionalBuildingsPage.vue"
import TraditionalCulturePage from "./components/TraditionalCulturePage.vue"
import Club1 from "./components/Club1/Club1.vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQq, faWeixin, faBilibili } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faQq, faWeixin, faBilibili);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/traditional-buildings", component: TraditionalBuildingsPage },
    { path: "/traditional-culture", component: TraditionalCulturePage },
    { path: "/organizations/club1", component: Club1},
    // ... other routes
  ],
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Corrected line
app.use(router);
app.mount("#app");
