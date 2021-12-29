<template>
  <a-config-provider :autoInsertSpaceInButton="false" :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

// 时间组件国际化
dayjs.locale("zh-cn");

export default defineComponent({
  data() {
    return {
      locale: zhCN, // antd vue 国际化
    };
  },
});
</script>

<style>
html {
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}

body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

html,
body {
  min-width: 1280px;
}

#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

#app .xh_block {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
