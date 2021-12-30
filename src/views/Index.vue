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
            <a-menu-item v-for="menuItem in menuList" :key="menuItem.id">
              {{ menuItem.name }}
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col>
          <a-space align="center" :size="9">
            <a-button type="text">
              <template #icon>
                <bell-outlined :style="{ color: 'rgba(0, 0, 0, 0.45)' }" />
              </template>
            </a-button>
            <a-avatar :size="40" :style="{ backgroundColor: '#EDEDED' }"
              >USER</a-avatar
            >
          </a-space>
        </a-col>
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
import { BellOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    BellOutlined,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const menuCurr = ref([]); // 当前菜单项
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

    // 点击菜单函数
    const onMenuPressed = (event) => {
      if (event.key) {
        router.push({ path: event.key, replace: true });
      }
    };

    const getMenuCurr = (path) => {
      // 路由路径匹配相关菜单项
      const res = menuList.filter((menuItem) => path.indexOf(menuItem.id) > -1);
      if (res.length > 0) {
        menuCurr.value = [res[0].id];
      }
    };

    getMenuCurr(route.path);
    // 监听路由变化
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
.table_name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.table_sub_name {
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.45);
}

.table_col_name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.table_col_c_name {
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
}

.table_col_c_name_bold {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
}

.table_col_name_bold {
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.table_col_name_primary {
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  color: #3e1ebd;
}

.table_col_name_s_primary {
  font-size: 12px;
  font-weight: 800;
  line-height: 20px;
  color: #3e1ebd;
}

.table_col_b_name {
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.meta_title {
  font-size: 16px;
  font-weight: 800;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.85);
}

.meta_sub_title {
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.45);
}

.meta_divider {
  width: 0px;
  height: 46px;
  border-left: 1px solid #f1f1f1;
}

/* 重置 antd vue menu 样式 */
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

/* 重置 antd vue model 样式 */
.ant-modal-root .ant-modal-mask {
  background-color: rgba(0, 0, 0, 0.12);
}

.ant-modal-root .ant-modal .ant-modal-content {
  border-radius: 6px;
}
</style>
