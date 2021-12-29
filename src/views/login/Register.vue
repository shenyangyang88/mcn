<template>
  <a-space direction="vertical" :size="4" :style="{ marginBottom: '24px' }">
    <div class="login_title">免费注册蓝色星合</div>
  </a-space>
  <a-form
    ref="registerRef"
    name="register"
    :model="registerFormState"
    :rules="registerFormRules"
  >
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="registerFormState.email"
        placeholder="请输入邮箱"
      ></a-input>
    </a-form-item>
    <a-form-item name="code" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="registerFormState.code"
        placeholder="请输入验证码"
      >
        <template #suffix>
          <a-button
            type="link"
            :style="{
              height: '17px',
              padding: '0',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '15px',
            }"
            >发送验证码</a-button
          >
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="companyFullName" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="registerFormState.companyFullName"
        placeholder="请输入机构全称"
      ></a-input>
    </a-form-item>
    <a-form-item name="companyName" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="registerFormState.companyName"
        placeholder="请输入机构简称"
      ></a-input>
    </a-form-item>
    <a-form-item name="platform" :style="{ paddingTop: '8px' }">
      <a-select
        mode="multiple"
        v-model:value="registerFormState.platform"
        :options="platformOptions"
        :showArrow="true"
        :showSearch="false"
        :max-tag-count="2"
        placeholder="请选择绑定平台"
      >
      </a-select>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="registerFormState.password"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item name="confirmPassword" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="registerFormState.confirmPassword"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '10px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        disabled
        :style="{ width: '100%', height: '40px' }"
      >
        立即注册
      </a-button>
    </a-form-item>
    <a-row justify="end" align="middle">
      <a-col>
        <a-button type="link" :style="{ padding: '0' }" @click="toLogin"
          >登录已有账号</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Validator from "../../utils/validator";

export default defineComponent({
  setup() {
    const platformOptions = ref([
      { value: "1", label: "抖音" },
      { value: "2", label: "快手" },
      { value: "3", label: "小红书" },
      { value: "4", label: "微博" },
      { value: "5", label: "微信" },
      { value: "6", label: "bilibili" },
    ]);

    const router = useRouter();

    const registerRef = ref(); // form ref 引用
    const registerFormState = ref({
      email: "",
      code: "",
      companyFullName: "",
      companyName: "",
      platform: undefined,
      password: "",
      confirmPassword: "",
    });

    let findEmailState = false; // 邮箱已注册状态

    // 邮箱验证函数
    const emailValidator = async (__rule, value) => {
      if (value) {
        if (Validator.email(value)) {
          if (findEmailState) {
            return Promise.reject("该邮箱已注册，请登录");
          }
        } else {
          return Promise.reject("请输入正确邮箱");
        }
      }
      return Promise.resolve();
    };

    // 表单规则定义
    const registerFormRules = {
      email: [
        {
          validator: emailValidator,
          trigger: "change",
        },
      ],
      code: [{ required: true, message: "请输入验证码", trigger: "change" }],
    };

    const toLogin = () => {
      router.push({ name: "LoginIndex", replace: true });
    };

    return {
      platformOptions,
      registerRef,
      registerFormState,
      registerFormRules,
      toLogin,
    };
  },
});
</script>
