import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Toaster from "@meforma/vue-toaster";
import "./assets/main.css";
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);
app.use(Toaster);
app.mount("#app");
