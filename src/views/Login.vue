<template>
  <a-layout>
    <a-layout-sider
      width="446"
      theme="light"
      :style="{
        background: 'rgba(30, 42, 189, 0.03)',
      }"
    >
    </a-layout-sider>
    <a-layout-content :style="{ background: '#fff' }">
      <a-row justify="center" align="middle" :style="{ height: '100%' }">
        <a-col>
          <router-view />
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<style>
.login_title {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
}

.login_sub_title {
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.25);
}

/* 重置 antd vue input 样式 */
.ant-form-item-control-input {
  width: 324px;
}

.ant-input-affix-wrapper {
  padding: 8px 11px;
  border-radius: 6px;
}

.ant-input-affix-wrapper .ant-input {
  border-radius: 0;
}

.ant-input-password-icon {
  color: rgba(0, 0, 0, 0.65);
}

.ant-input {
  padding: 8px 11px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  font-size: 16px;
  line-height: 22px;
}

.ant-select {
  font-size: 16px;
  line-height: 22px;
}

.ant-select-item {
  margin-bottom: 4px;
}

.ant-select-dropdown {
  padding: 8px 0;
  border-radius: 6px;
}

.ant-select-selection-overflow {
  padding-left: 3px;
}

.ant-select-multiple .ant-select-selection-item {
  margin: 0 4px;
  padding: 0 12px;
  border-radius: 14px;
  background: rgba(62, 30, 189, 0.08);
}

.ant-select-multiple .ant-select-selection-item-content {
  font-size: 12px;
}

.ant-select-multiple .ant-select-selection-search {
  margin-top: 0px;
  margin-bottom: 0px;
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  height: 40px;
  border-radius: 6px;
}

.ant-select-single:not(.ant-select-customize-input)
  .ant-select-selector::after {
  line-height: 38px;
}

.ant-select-single:not(.ant-select-customize-input)
  .ant-select-selector
  .ant-select-selection-search-input {
  height: 38px;
}

.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  line-height: 38px;
}

.ant-select-arrow {
  color: rgba(0, 0, 0, 0.65);
}

.ant-form-item-explain {
  padding-top: 4px;
  font-size: 12px;
  line-height: 17px;
}

.ant-form-item-explain.ant-form-item-explain-error {
  color: rgba(235, 21, 38, 0.85);
}

.ant-form-item-has-error
  :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-error
  :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
  border-color: rgba(235, 21, 38, 0.85);
  background-color: rgba(235, 21, 38, 0.04);
}

.ant-form-item-has-error
  :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-error
  :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
  border-color: rgba(235, 21, 38, 0.85);
  background-color: rgba(235, 21, 38, 0.04);
}

.ant-form-item-has-error
  :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper
  .ant-input,
.ant-form-item-has-error
  :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover
  .ant-input {
  border-color: transparent;
  background-color: transparent;
}
</style>
