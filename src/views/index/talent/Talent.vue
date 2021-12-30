<template>
  <div class="xh_block">
    <a-row align="middle" :style="{ marginTop: '20px' }">
      <a-col flex="0 0 260px">
        <a-input
          id="search"
          placeholder="搜索达人"
          v-model:value="search"
          v-on:pressEnter="onSearch"
          :style="{
            padding: '4px 8px 4px 11px',
            border: '1px solid rgba(210, 211, 213, 1)',
            borderRadius: '16px !important',
            backgroundColor: '#F7F8FA',
          }"
        >
          <template #suffix>
            <search-outlined
              style="font-size: 13px; color: rgba(0, 0, 0, 0.25)"
            />
          </template>
        </a-input>
      </a-col>
      <a-col flex="1 1 auto"></a-col>
      <a-col>
        <a-button type="link">邀请记录</a-button>
        <a-button type="primary" shape="round">邀请达人</a-button>
      </a-col>
    </a-row>
    <a-card
      :bordered="false"
      :style="{ marginTop: '20px', borderRadius: '6px' }"
      :bodyStyle="{ padding: '20px' }"
    >
      <div></div>
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
            <a-space :size="16">
              <span class="table_name"> 达人列表 </span>
              <span class="table_sub_name"> 共5898位达人 </span>
            </a-space>
          </a-col>
        </a-row>
      </template>
      <a-table
        :columns="talentColumns"
        :data-source="talentList"
        :showHeader="false"
        :expandedRowKeys="['1']"
        :expandIconColumnIndex="-1"
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
            <a-space align="center" :size="16" :style="{ lineHeight: '1' }">
              <a-avatar :size="54">User</a-avatar>
              <a-space
                direction="vertical"
                align="start"
                :size="8"
                :style="{ lineHeight: '1' }"
              >
                <a-space align="center" :size="12" :style="{ lineHeight: '1' }">
                  <div class="table_col_name">烟老大</div>
                  <div class="meta_sub_title">186000000000</div>
                </a-space>
                <a-row align="middle">
                  <a-col>
                    <a-space :size="8">
                      <img
                        v-for="(icon, index) in iconList"
                        :key="index"
                        :src="icon"
                        width="24"
                        height="24"
                      />
                    </a-space>
                  </a-col>
                  <a-col>
                    <a-button type="link">
                      收起详细
                      <down-outlined :style="{ fontSize: '10px' }" />
                    </a-button>
                  </a-col>
                </a-row>
              </a-space>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'done'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_b_name">5</div>
              <div class="meta_sub_title">已完成订单</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'doing'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_b_name">24</div>
              <div class="meta_sub_title">进行中订单</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'amount'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_b_name">24w</div>
              <div class="meta_sub_title">累计收入</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'time'">
            <a-space
              direction="vertical"
              align="start"
              :size="8"
              :style="{ lineHeight: '1' }"
            >
              <div class="table_col_b_name">2021-12-11</div>
              <div class="meta_sub_title">最近成交时间</div>
            </a-space>
          </template>
          <template v-if="column.dataIndex === 'divider'">
            <div
              class="meta_divider"
              :style="{ height: '48px', margin: '0 40px' }"
            ></div>
          </template>
          <template v-if="column.dataIndex === 'get'">
            <a-space
              direction="vertical"
              align="center"
              :size="6"
              :style="{ lineHeight: '1' }"
            >
              <a-button type="primary" shape="round" :style="{ width: '88px' }">
                重新解约
              </a-button>
              <a-space align="center" :size="9" :style="{ lineHeight: '1' }">
                <a-tooltip title="重新解约说明">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
                <div class="meta_sub_title">解约失败</div>
              </a-space>
            </a-space>
          </template>
        </template>
        <template #expandedRowRender="{ record }">
          <a-table
            :columns="talentChildrenColumns"
            :data-source="record.children"
            :showHeader="false"
            :pagination="false"
          >
            <template #bodyCell="{ column }">
              <template v-if="column.dataIndex === 'user'">
                <a-space
                  align="center"
                  :size="8"
                  :style="{ marginLeft: '70px', lineHeight: '1' }"
                >
                  <a-avatar :size="24">User</a-avatar>
                  <div class="table_col_c_name">烟老大的蘑菇基地</div>
                </a-space>
              </template>
              <template v-if="column.dataIndex === 'done'">
                <div class="table_col_c_name_bold">5</div>
              </template>
              <template v-if="column.dataIndex === 'doing'">
                <div class="table_col_c_name_bold">24</div>
              </template>
              <template v-if="column.dataIndex === 'amount'">
                <div class="table_col_c_name_bold">45w</div>
              </template>
              <template v-if="column.dataIndex === 'time'">
                <div class="table_col_c_name_bold">2021-12-11</div>
              </template>
            </template>
          </a-table>
        </template>
      </a-table>
    </a-card>
  </div>
  <a-modal
    v-model:visible="termination"
    title="选择解约账号"
    :footer="null"
    :destroyOnClose="true"
  ></a-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  SearchOutlined,
  InfoCircleOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import StaticIcon from "../../../utils/static_icon";

export default defineComponent({
  components: {
    SearchOutlined,
    InfoCircleOutlined,
    DownOutlined,
  },
  setup() {
    const termination = ref(true);

    const search = ref("");
    const onSearch = () => {};

    const talentColumns = [
      {
        dataIndex: "user",
        key: "user",
        width: 420,
      },
      {
        dataIndex: "done",
        key: "done",
        width: 100,
      },
      {
        dataIndex: "doing",
        key: "doing",
        width: 100,
      },
      {
        dataIndex: "amount",
        key: "amount",
        width: 100,
      },
      {
        dataIndex: "time",
        key: "time",
        width: 252,
      },
      {
        dataIndex: "divider",
        key: "divider",
        width: 81,
      },
      {
        dataIndex: "get",
        key: "get",
      },
    ];
    const talentList = [
      { key: "1", children: [{}, {}, {}] },
      { key: "2" },
      { key: "3" },
    ];

    const talentChildrenColumns = [
      {
        dataIndex: "user",
        key: "user",
        width: 420,
      },
      {
        dataIndex: "done",
        key: "done",
        width: 100,
      },
      {
        dataIndex: "doing",
        key: "doing",
        width: 100,
      },
      {
        dataIndex: "amount",
        key: "amount",
        width: 100,
      },
      {
        dataIndex: "time",
        key: "time",
      },
    ];

    const iconList = [];
    [
      "bilibili",
      "douyin",
      "kuaishou",
      "wechat",
      "weibo",
      "xiaohongshu",
    ].forEach((icon) => {
      iconList.push(StaticIcon.get(`platform/${icon}.png`));
    });

    return {
      termination,
      search,
      onSearch,
      talentColumns,
      talentChildrenColumns,
      talentList,
      iconList,
    };
  },
});
</script>

<style>
#search {
  background-color: rgba(247, 248, 250, 1);
}

/* 重置 antd vue table 样式 */
.ant-table-tbody > tr > td {
  padding: 32px 0;
}

.ant-table-tbody > tr.ant-table-row:hover > td {
  background: transparent;
}

.ant-table-tbody > tr.ant-table-expanded-row {
  position: relative;
  top: -12px;

  background: #fff;
}

.ant-table-tbody > tr.ant-table-expanded-row > td {
  padding: 0;
}

.ant-table-tbody
  > tr.ant-table-expanded-row
  > td
  .ant-table-wrapper
  .ant-table {
  margin: 0 !important;
  padding-bottom: 10px;
}

.ant-table-tbody
  > tr.ant-table-expanded-row
  > td
  .ant-table-wrapper
  .ant-table
  .ant-table-container::before,
.ant-table-tbody
  > tr.ant-table-expanded-row
  > td
  .ant-table-wrapper
  .ant-table
  .ant-table-container::after {
  width: 0;
}

.ant-table-tbody
  > tr.ant-table-expanded-row
  > td
  .ant-table-wrapper
  .ant-table
  tr:hover
  td {
  border-radius: 6px;
  background: #f7f8fa;
}

.ant-table-tbody
  > tr.ant-table-expanded-row
  > td
  .ant-table-wrapper
  .ant-table
  tr
  td {
  height: 44px;
  padding: 0;
  border-bottom: 0;
}

/* 重置 antd vue model config 样式 */
.ant-modal .ant-modal-content .ant-modal-close .ant-modal-close-x {
  font-size: 14px;
}

.ant-modal .ant-modal-content .ant-modal-header {
  margin: 0 20px;
  padding: 20px 0 16px 0;
}

.ant-modal .ant-modal-content .ant-modal-header .ant-modal-title {
  font-weight: 400;
  line-height: 20px;
}
</style>
