import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import MainPage from "@/components/MainPage.vue";
import Club1 from "@/components/Club1/Club1.vue";
import Club2 from "@/components/Club2/Club2.vue";
import Club3 from "@/components/Club3/Club3.vue";
import Club4 from "@/components/Club4/Club4.vue";
import Club5 from "@/components/Club5/Club5.vue";
import Traditional_culture from "@/components/Traditional_culture/Traditional_culture.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQq, faWeixin, faBilibili } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faQq, faWeixin, faBilibili);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/organizations/club1", component: Club1 },
    { path: "/organizations/club2", component: Club2 },
    { path: "/organizations/club3", component: Club3 },
    { path: "/organizations/club4", component: Club4 },
    { path: "/organizations/club5", component: Club5 },
    { path: "/traditional_culture", component: Traditional_culture },
    // ... other routes
  ],
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon); // Corrected line
app.use(router);
app.mount("#app");
