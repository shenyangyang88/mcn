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
    v-on:finish="finish"
  >
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="loginFormState.email"
        placeholder="请输入邮箱"
        v-on:blur="validateEmailState"
        v-on:change="emailChanged"
      ></a-input>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="loginFormState.password"
        placeholder="请输入密码"
        v-on:change="passwordChanged"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '10px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        :disabled="disabled"
        :style="{ width: '100%', height: '40px' }"
      >
        登录
      </a-button>
    </a-form-item>
    <a-row justify="space-between" align="middle">
      <a-col>
        <a-button type="link" :style="{ padding: '0' }" @click="toRegister"
          >立即注册</a-button
        >
      </a-col>
      <a-col>
        <a-button
          type="text"
          :style="{
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
import Validator from "../../utils/validator";

export default defineComponent({
  setup() {
    const mockEmail = "a@b.com";
    const mockPassword = "123";

    const router = useRouter();

    const loginRef = ref(); // form ref 引用
    const loginFormState = ref({
      email: "",
      password: "",
    });

    let notfindEmailState = false; // 邮箱未注册状态
    let errState = false; // 账号密码未匹配状态

    // 邮箱验证函数
    const emailValidator = async (__rule, value) => {
      if (value) {
        if (Validator.email(value)) {
          if (notfindEmailState) {
            return Promise.reject("该邮箱未注册，请点击立即注册");
          }
          if (errState) {
            return Promise.reject("账号密码不匹配请重新输入");
          }
        } else {
          return Promise.reject("请输入正确邮箱");
        }
      }
      return Promise.resolve();
    };

    // 邮箱更改函数
    const emailChanged = () => {
      if (notfindEmailState) {
        notfindEmailState = false;
      }
      if (errState) {
        errState = false;
        if (loginRef.value) {
          loginRef.value.validateFields("password");
        }
      }
    };

    // 密码验证函数
    const passwordValidator = async (__rule, value) => {
      if (value) {
        if (errState) {
          return Promise.reject("账号密码不匹配请重新输入");
        }
      }
      return Promise.resolve();
    };

    // 密码更改函数
    const passwordChanged = () => {
      if (errState) {
        errState = false;
        if (loginRef.value) {
          loginRef.value.validateFields("email");
        }
      }
    };

    // 表单规则定义
    const loginFormRules = {
      email: [
        {
          validator: emailValidator,
          trigger: "change",
        },
      ],
      password: [
        {
          validator: passwordValidator,
          trigger: "change",
        },
      ],
    };

    // 验证邮箱注册状态
    const validateEmailState = async () => {
      // 邮箱未注册或者账号密码不匹配，则不进行验证
      if (notfindEmailState || errState) {
        return;
      }
      // 邮箱格式不正确，则不进行验证
      if (!Validator.email(loginFormState.value.email)) {
        return;
      }

      // 请求接口
      const validateState = loginFormState.value.email === mockEmail;
      // 验证不通过，则提示信息
      if (!validateState) {
        notfindEmailState = true;
        if (loginRef.value) {
          loginRef.value.validateFields("email");
        }
      }
    };

    const disabled = computed(() => {
      return !(
        Validator.email(loginFormState.value.email) &&
        loginFormState.value.password
      );
    });

    // 提交表单
    const finish = async (values) => {
      // 请求接口
      const validateState =
        values.email === mockEmail && values.password === mockPassword;
      // 账号密码未匹配，则提示信息
      if (!validateState) {
        errState = true;
        if (loginRef.value) {
          loginRef.value.validateFields();
        }
      }
    };

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
      disabled,
      emailChanged,
      validateEmailState,
      passwordChanged,
      finish,
      toRegister,
      toForget,
    };
  },
});
</script>
