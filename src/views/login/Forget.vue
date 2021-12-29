<template>
  <a-space direction="vertical" :size="4" :style="{ marginBottom: '24px' }">
    <div class="login_title">忘记密码</div>
  </a-space>
  <a-form ref="forgetRef" name="forget" :model="forgetFormState">
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="forgetFormState.email"
        placeholder="请输入邮箱"
      ></a-input>
    </a-form-item>
    <a-form-item name="code" :style="{ paddingTop: '8px' }">
      <a-input v-model:value="forgetFormState.code" placeholder="请输入验证码">
        <template #suffix>
          <a-button
            type="link"
            :style="{
              height: '17px',
              padding: '0',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '17px',
            }"
            >发送验证码</a-button
          >
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="forgetFormState.password"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item name="confirmPassword" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="forgetFormState.confirmPassword"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '16px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        disabled
        :style="{ width: '100%', height: '40px' }"
      >
        立即重置
      </a-button>
    </a-form-item>
    <a-row justify="end" align="middle">
      <a-col>
        <a-button
          type="link"
          :style="{ height: '20px', padding: '0' }"
          @click="toLogin"
          >登录已有账号</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const forgetRef = ref();
    const forgetFormState = ref({
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    });

    const toLogin = () => {
      router.push({ name: "LoginIndex", replace: true });
    };

    return {
      forgetRef,
      forgetFormState,
      toLogin,
    };
  },
});
</script>
