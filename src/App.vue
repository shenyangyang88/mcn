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

img {
  display: block;
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

<style>
/* 重置 antd value table pagination 样式 */
.ant-table-pagination.ant-pagination.ant-pagination.mini {
  margin: 20px 0;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini .ant-pagination-prev {
  margin-right: 7px;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini .ant-pagination-next {
  margin-left: 7px;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini .ant-pagination-item {
  margin: 0 4px;
  line-height: 22px;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-item.ant-pagination-item-active {
  background: #3e1ebd;
  border: none;
  border-radius: 6px;
  font-weight: 400;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-item.ant-pagination-item-active
  a {
  color: #ffffff;
}

.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-item
  a {
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.65);
}

.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-prev
  button,
.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-next
  button {
  color: rgba(0, 0, 0, 0.65);
}

.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-disabled
  .ant-pagination-item-link,
.ant-table-pagination.ant-pagination.ant-pagination.mini
  .ant-pagination-disabled:hover
  .ant-pagination-item-link {
  color: rgba(0, 0, 0, 0.25);
}
</style>
