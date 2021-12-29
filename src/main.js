import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import AntdVuePlugin from "./plugins/antd-vue";

const app = createApp(App);

// 按需加载 antd vue 组件
AntdVuePlugin.install(app);

app.use(store).use(router).mount("#app");
