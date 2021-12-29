<template>
  <a-space direction="vertical" :size="4" :style="{ marginBottom: '24px' }">
    <div class="login_title">欢迎使用蓝色星合</div>
    <div class="login_sub_title">MCN机构后台</div>
  </a-space>
  <a-form
    ref="loginRef"
    name="login"
    :model="loginFormState"
    :rules="loginFormRules"
  >
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="loginFormState.email"
        placeholder="请输入邮箱"
      ></a-input>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="loginFormState.password"
        placeholder="请输入密码"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '16px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        :disabled="loginFormDisabled"
        :style="{ width: '100%', height: '40px' }"
      >
        登录
      </a-button>
    </a-form-item>
    <a-row justify="space-between" align="middle">
      <a-col>
        <a-button
          type="link"
          :style="{ height: '20px', padding: '0' }"
          @click="toRegister"
          >立即注册</a-button
        >
      </a-col>
      <a-col>
        <a-button
          type="text"
          :style="{
            height: '20px',
            padding: '0',
            color: 'rgba(0, 0, 0, 0.65)',
            background: 'transparent',
          }"
          @click="toForget"
          >忘记密码？</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const loginRef = ref();
    const loginFormState = ref({
      email: "",
      password: "",
    });

    const validateEmail = async (__rule, value) => {
      if (!value || /\S+@\S+\.\S+/.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("邮箱格式错误");
    };
    const validatePassword = async () => {
      return Promise.resolve();
    };

    const loginFormRules = {
      email: [
        {
          validator: validateEmail,
          trigger: "change",
        },
      ],
      password: [
        {
          validator: validatePassword,
          trigger: "change",
        },
      ],
    };

    const loginFormDisabled = computed(() => {
      return !(
        /\S+@\S+\.\S+/.test(loginFormState.value.email) &&
        loginFormState.value.password
      );
    });

    const toRegister = () => {
      router.push({ name: "LoginRegister", replace: true });
    };

    const toForget = () => {
      router.push({ name: "LoginForget", replace: true });
    };

    return {
      loginRef,
      loginFormState,
      loginFormRules,
      loginFormDisabled,
      toRegister,
      toForget,
    };
  },
});
</script>
