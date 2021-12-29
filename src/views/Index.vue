<template>
  <a-layout :hasSider="false">
    <a-layout-header
      :hasSider="false"
      :style="{
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)',
      }"
    >
      <a-row align="middle" :style="{ height: '64px' }">
        <a-col>
          <img
            src="../assets/images/logo.png"
            width="234"
            height="64"
            :style="{ marginRight: '20px' }"
          />
        </a-col>
        <a-col flex="1 1 auto">
          <a-menu
            mode="horizontal"
            v-model:selectedKeys="menuCurr"
            v-on:click="onMenuPressed"
            :style="{ border: 'none' }"
          >
            <a-menu-item v-for="menuItem in menuList" :key="menuItem.id">{{
              menuItem.name
            }}</a-menu-item>
          </a-menu>
        </a-col>
        <a-col> </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content :hasSider="false" :style="{ overflow: 'auto' }">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const menuCurr = ref([]);
    const menuList = [
      {
        id: "/home",
        name: "首页概览",
      },
      {
        id: "/talent",
        name: "达人管理",
      },
      {
        id: "/order",
        name: "我的订单",
      },
      {
        id: "/recruit",
        name: "招募大厅",
      },
      {
        id: "/info",
        name: "信息管理",
      },
    ];

    const onMenuPressed = (event) => {
      if (event.key) {
        router.push({ path: event.key, replace: true });
      }
    };

    const getMenuCurr = (path) => {
      const res = menuList.filter((menuItem) => path.indexOf(menuItem.id) > -1);
      if (res.length > 0) {
        menuCurr.value = [res[0].id];
      }
    };

    getMenuCurr(route.path);
    watch(
      () => route.path,
      (path) => {
        getMenuCurr(path);
      }
    );

    return {
      menuCurr,
      menuList,
      onMenuPressed,
    };
  },
});
</script>

<style>
.ant-menu-horizontal > .ant-menu-item::after {
  left: 38px;
  right: 38px;
  border: 2px solid transparent;
  border-radius: 2px;
}

.ant-menu-horizontal > .ant-menu-item:hover::after,
.ant-menu-horizontal > .ant-menu-item-selected::after,
.ant-menu-horizontal > .ant-menu-item-active::after,
.ant-menu-horizontal > .ant-menu-item-open::after {
  border: 2px solid #3e1ebd;
}
</style>
