import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import MainPage from "./components/MainPage.vue"; // Import the MainPage component
import OrganizationsPage from "./components/OrganizationsPage.vue"
import TraditionalBuildingsPage from "./components/TraditionalBuildingsPage.vue"
import TraditionalCulturePage from "./components/TraditionalCulturePage.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/organizations", component: OrganizationsPage },
    { path: "/traditional-buildings", component: TraditionalBuildingsPage },
    { path: "/traditional-culture", component: TraditionalCulturePage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
