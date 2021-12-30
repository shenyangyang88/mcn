<template>
  <a-space align="center" :size="4">
    <img :src="icon" width="20" height="20" />
    <div class="tag_name">{{ platformName }}</div>
  </a-space>
</template>

<script>
import { defineComponent } from "vue";
import StaticIcon from "../utils/static_icon";

export default defineComponent({
  props: {
    platformIcon: {
      type: String,
      required: true,
    },
    platformName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const icon = StaticIcon.get(`platform/${props.platformIcon}.png`);
    return {
      icon,
    };
  },
});
</script>

<style>
.tag_name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
