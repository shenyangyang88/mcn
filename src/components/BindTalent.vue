<template>
  <div class="talent_wrap">
    <a-space align="center" :size="4" :style="{ marginBottom: '16px' }">
      <a-avatar :size="36">USER</a-avatar>
      <div class="table_col_name">烟老大的蘑菇基地</div>
    </a-space>
    <a-space direction="vertical" :size="12" :style="{ width: '100%' }">
      <a-row justify="space-between" align="middle">
        <a-col>
          <div class="meta_sub_title">粉丝数</div>
        </a-col>
        <a-col>
          <div class="meta_title">0</div>
        </a-col>
      </a-row>
      <a-row justify="space-between" align="middle">
        <a-col>
          <div class="meta_sub_title">已完成任务</div>
        </a-col>
        <a-col>
          <div class="meta_title">0</div>
        </a-col>
      </a-row>
      <a-space direction="vertical" :size="8">
        <div class="meta_sub_title">绑定平台</div>
        <a-space :size="8">
          <img
            v-for="(icon, index) in iconList"
            :key="index"
            :src="icon"
            width="20"
            height="20"
          />
        </a-space>
      </a-space>
    </a-space>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StaticIcon from "../utils/static_icon";

export default defineComponent({
  props: {
    platformIconList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    let iconList = [];
    for (let icon of props.platformIconList) {
      iconList.push(StaticIcon.get(`platform/${icon}.png`));
    }
    return {
      iconList,
    };
  },
});
</script>

<style>
.talent_wrap {
  width: 216px;
  height: 205px;
  padding: 20px;
  border-radius: 8px;
  background: #f7f8fa;
}

.talent_wrap:hover {
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.04);
}
</style>
