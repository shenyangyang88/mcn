<template>
  <div class="xh_block">
    <a-card
      :bordered="false"
      :style="{ marginTop: '20px', borderRadius: '6px' }"
      :headStyle="{
        padding: '0',
        margin: '0 20px 1px',
        borderBottom: '1px solid #F1F1F1',
      }"
      :bodyStyle="{ padding: '0 20px 20px' }"
    >
      <template #title>
        <a-row align="middle" :style="{ padding: '4px 0' }">
          <a-col>
            <a-avatar :size="54">USER</a-avatar>
          </a-col>
          <a-col flex="1 1 auto" :style="{ marginLeft: '16px' }">
            <a-space direction="vertical" align="start" :size="7">
              <div class="user_name">红色光标无限责任公司</div>
              <img
                src="../../assets/images/platform/douyin.png"
                width="20"
                height="20"
              />
              <!-- <span class="platform_name"> 抖音 </span> -->
            </a-space>
          </a-col>
          <a-col>
            <a-space direction="vertical" align="end" :size="8">
              <div class="meta_title">2,345</div>
              <div class="meta_sub_title">达人数</div>
            </a-space>
          </a-col>
          <a-col :style="{ margin: '0 40px' }">
            <div class="meta_divider"></div>
          </a-col>
          <a-col>
            <a-space direction="vertical" align="end" :size="8">
              <div class="meta_title">12,345W</div>
              <div class="meta_sub_title">总粉丝量</div>
            </a-space>
          </a-col>
        </a-row>
      </template>
      <a-row align="middle" :style="{ margin: '20px 0 16px' }">
        <a-col flex="1 1 auto">
          <div class="card_title">达人概览</div>
        </a-col>
        <a-col>
          <a-button
            type="link"
            :style="{
              height: '20px',
              padding: '0',
              fontSize: '12px',
              lineHeight: '20px',
            }"
          >
            查看全部达人
            <right-outlined :style="{ marginLeft: '2px' }" />
          </a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <div class="talent_wrap"></div>
        </a-col>
      </a-row>
    </a-card>
    <a-card
      :bordered="false"
      :style="{ marginTop: '20px', borderRadius: '6px' }"
      :bodyStyle="{ padding: '20px 20px 0' }"
    >
      <a-row align="middle">
        <a-col flex="1 1 auto">
          <div class="card_title">数据概览</div>
        </a-col>
      </a-row>
      <a-row
        justify="space-around"
        align="middle"
        :style="{ padding: '24px 0' }"
      >
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">12</div>
            <div class="meta_sub_title">昨日完成任务数</div>
          </a-space>
        </a-col>
        <a-col>
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">12</div>
            <div class="meta_sub_title">昨日收入</div>
          </a-space>
        </a-col>
        <a-col>
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">12</div>
            <div class="meta_sub_title">全部任务数</div>
          </a-space>
        </a-col>
        <a-col>
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">12</div>
            <div class="meta_sub_title">全部收入</div>
          </a-space>
        </a-col>
      </a-row>
    </a-card>
    <a-card
      :bordered="false"
      :style="{ marginTop: '20px', marginBottom: '28px', borderRadius: '6px' }"
      :headStyle="{
        padding: '0',
        margin: '0 20px 1px',
        borderBottom: '1px solid #F1F1F1',
      }"
      :bodyStyle="{ padding: '0 20px' }"
    >
      <template #title>
        <a-row align="middle" :style="{ height: '28px' }">
          <a-col flex="0 0 auto">
            <a-space :size="16">
              <span
                style="
                  font-size: 14px;
                  font-weight: 500;
                  line-height: 22px;
                  color: rgba(0, 0, 0, 0.85);
                "
              >
                达人列表
              </span>
              <span
                style="
                  font-size: 12px;
                  line-height: 22px;
                  color: rgba(0, 0, 0, 0.45);
                "
              >
                共5898位达人
              </span>
            </a-space>
          </a-col>
        </a-row>
      </template>
      <a-table
        :showHeader="false"
        :pagination="{
          position: ['bottomRight'],
          hideOnSinglePage: true,
          size: 'small',
          pageSize: 10,
          total: 50,
        }"
      ></a-table>
    </a-card>
  </div>
</template>

<script>
import { RightOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    RightOutlined,
  },
});
</script>

<style>
.card_title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.user_name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.platform_name {
  font-size: 14px;
  font-weight: 500;
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

.talent_wrap {
  width: 216px;
  height: 205px;
  background: #f7f8fa;
  border-radius: 8px;
}
</style>
