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
            <a-space
              direction="vertical"
              align="start"
              :size="7"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name">红色光标无限责任公司</div>
              <a-space align="center" :size="16" :style="{ lineHeight: '1' }">
                <bind-platform-tag
                  :platformIcon="'bilibili'"
                  :platformName="'bilibili'"
                />
                <bind-platform-tag
                  :platformIcon="'douyin'"
                  :platformName="'抖音'"
                />
                <bind-platform-tag
                  :platformIcon="'kuaishou'"
                  :platformName="'快手'"
                />
                <bind-platform-tag
                  :platformIcon="'wechat'"
                  :platformName="'微信'"
                />
                <bind-platform-tag
                  :platformIcon="'weibo'"
                  :platformName="'微博'"
                />
                <bind-platform-tag
                  :platformIcon="'xiaohongshu'"
                  :platformName="'小红书'"
                />
              </a-space>
            </a-space>
          </a-col>
          <a-col>
            <a-space direction="vertical" align="end" :size="8">
              <div class="meta_title">0</div>
              <div class="meta_sub_title">达人数</div>
            </a-space>
          </a-col>
          <a-col :style="{ margin: '0 40px' }">
            <div class="meta_divider"></div>
          </a-col>
          <a-col>
            <a-space direction="vertical" align="end" :size="8">
              <div class="meta_title">0</div>
              <div class="meta_sub_title">总粉丝量</div>
            </a-space>
          </a-col>
        </a-row>
      </template>
      <a-row align="middle" :style="{ margin: '20px 0 16px' }">
        <a-col flex="1 1 auto">
          <div class="table_name">达人概览</div>
        </a-col>
        <a-col>
          <a-button
            type="link"
            :style="{
              height: '17px',
              padding: '0',
              fontSize: '12px',
              lineHeight: '15px',
            }"
          >
            查看全部达人
            <right-outlined :style="{ marginLeft: '2px', fontSize: '10px' }" />
          </a-button>
        </a-col>
      </a-row>
      <a-space align="center" :size="20" :style="{ lineHeight: '1' }">
        <bind-talent
          :platformIconList="[
            'bilibili',
            'douyin',
            'kuaishou',
            'wechat',
            'weibo',
            'xiaohongshu',
          ]"
        />
        <bind-talent
          :platformIconList="[
            'bilibili',
            'douyin',
            'kuaishou',
            'wechat',
            'weibo',
            'xiaohongshu',
          ]"
        />
        <bind-talent
          :platformIconList="[
            'bilibili',
            'douyin',
            'kuaishou',
            'wechat',
            'weibo',
            'xiaohongshu',
          ]"
        />
        <bind-talent
          :platformIconList="[
            'bilibili',
            'douyin',
            'kuaishou',
            'wechat',
            'weibo',
            'xiaohongshu',
          ]"
        />
        <bind-talent
          :platformIconList="[
            'bilibili',
            'douyin',
            'kuaishou',
            'wechat',
            'weibo',
            'xiaohongshu',
          ]"
        />
      </a-space>
    </a-card>
    <a-card
      :bordered="false"
      :style="{ marginTop: '20px', borderRadius: '6px' }"
      :bodyStyle="{ padding: '20px 20px 0' }"
    >
      <a-row align="middle">
        <a-col flex="1 1 auto">
          <div class="table_name">数据概览</div>
        </a-col>
      </a-row>
      <a-row justify="center" align="middle" :style="{ padding: '24px 0' }">
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">0</div>
            <div class="meta_sub_title">昨日完成任务数</div>
          </a-space>
        </a-col>
        <a-col :style="{ margin: '0 120px' }">
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">0</div>
            <div class="meta_sub_title">昨日收入</div>
          </a-space>
        </a-col>
        <a-col :style="{ margin: '0 120px' }">
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">0</div>
            <div class="meta_sub_title">全部任务数</div>
          </a-space>
        </a-col>
        <a-col :style="{ margin: '0 120px' }">
          <div class="meta_divider"></div>
        </a-col>
        <a-col>
          <a-space direction="vertical" align="center" :size="8">
            <div class="meta_title">0</div>
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
          <a-col>
            <a-space :size="4">
              <span class="table_name"> 待处理订单 </span>
              <a-badge
                count="24"
                :number-style="{
                  backgroundColor: 'rgba(62, 30, 189, 0.15)',
                  color: '#3E1EBD',
                }"
              />
            </a-space>
          </a-col>
        </a-row>
      </template>
      <a-table
        :columns="orderColumns"
        :data-source="orderList"
        :showHeader="false"
        :pagination="{
          position: ['bottomRight'],
          hideOnSinglePage: true,
          size: 'small',
          pageSize: 10,
          total: 50,
        }"
      >
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'user'">
            <a-space align="center" :size="8" :style="{ lineHeight: '1' }">
              <a-avatar :size="46">User</a-avatar>
              <a-space
                direction="vertical"
                align="start"
                :size="8"
                :style="{ lineHeight: '1' }"
              >
                <div class="table_col_name">烟老大的蘑菇基地</div>
                <div class="meta_sub_title">达人信息</div>
              </a-space>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'project'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name">花西子古装视频推广12.2</div>
              <div class="meta_sub_title">项目名称</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'order'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name_bold">56787654567876547654</div>
              <div class="meta_sub_title">订单ID</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'platform'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name">微信视频号</div>
              <div class="meta_sub_title">推广平台</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'content'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name">20-60S视频</div>
              <div class="meta_sub_title">内容形式</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'amount'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name_primary">
                <span class="table_col_name_s_primary">¥</span>702,345
              </div>
              <div class="meta_sub_title">投放金额</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'status'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_name">待接单</div>
              <div class="meta_sub_title">订单状态</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'get'">
            <a-button
              type="primary"
              shape="round"
              :style="{ width: '100%' }"
              v-on:click="getOrder"
            >
              接单
            </a-button>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Modal } from "ant-design-vue";
import { RightOutlined } from "@ant-design/icons-vue";
import BindPlatformTag from "../../components/BindPlatformTag.vue";
import BindTalent from "../../components/BindTalent.vue";

export default defineComponent({
  components: {
    RightOutlined,
    BindPlatformTag,
    BindTalent,
  },
  setup() {
    const orderColumns = [
      {
        dataIndex: "user",
        key: "user",
        width: 198,
      },
      {
        dataIndex: "project",
        key: "project",
        width: 198,
      },
      {
        dataIndex: "order",
        key: "order",
        width: 210,
      },
      {
        dataIndex: "platform",
        key: "platform",
        width: 106,
      },
      {
        dataIndex: "content",
        key: "content",
        width: 128,
      },
      {
        dataIndex: "amount",
        key: "amount",
        width: 136,
      },
      {
        dataIndex: "status",
        key: "status",
        width: 108,
      },
      {
        dataIndex: "get",
        key: "get",
        width: 78,
      },
    ];

    const orderList = [{}, {}, {}];

    const getOrder = () => {
      Modal.confirm({
        centered: true,
        title: "确认要代替达人接单吗？",
        content:
          "点击确定后，该订单将通过小程序进入到对应达人列表中，请保证订单完成情况。",
      });
    };

    return {
      orderColumns,
      orderList,
      getOrder,
    };
  },
});
</script>

<style>
/* 重置 antd vue table 样式 */
.ant-table-tbody > tr > td {
  padding: 20px 0;
}

/* 重置 antd vue model config 样式 */
.ant-modal.ant-modal-confirm
  .ant-modal-confirm-body
  .ant-modal-confirm-content {
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.65);
}

.ant-modal.ant-modal-confirm .ant-modal-confirm-btns {
  margin-top: 32px;
}

.ant-modal.ant-modal-confirm .ant-modal-confirm-btns .ant-btn {
  padding: 6px 26px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 16px;
}

.ant-modal.ant-modal-confirm .ant-modal-confirm-btns .ant-btn-primary {
  color: #fff;
}

.ant-modal.ant-modal-confirm .ant-modal-confirm-btns button + button {
  margin-left: 20px;
}
</style>
