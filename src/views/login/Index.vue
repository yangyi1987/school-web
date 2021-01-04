<template lang="pug">
  .LoginIndex
    .left
      .title 计算机工程学院绩效考核系统
      .welcome 欢迎使用
      .login-from
        a-form-model.form-model(
          ref="ruleForm"
          layout="horizontal"
          :model="formInline"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        )
          a-form-model-item.item(prop="code")
            a-input.input(v-model="formInline.code" placeholder="请输入账号")
              a-icon(slot="prefix" type="code" style="color:rgba(0,0,0,.25)")
          a-form-model-item.item(prop="password")
            a-input-password.input(v-model="formInline.password" type="password" placeholder="请输入密码")
              a-icon(slot="prefix" type="lock" style="color:rgba(0,0,0,.25)")
          a-form-model-item.item
            a-button.btn(type="primary"  @click="onSubmit") 登录
    .right
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { login } from "@/http/login/index";

@Component
export default class LoginIndex extends Vue {
  private labelCol: { span: number } = { span: 20 };
  private formInline: any = { code: "", password: "" };
  private rules: any = {
    code: [{ required: true, message: "请输入账号", trigger: "change" }],
    password: [{ required: true, message: "请输入密码", trigger: "change" }]
  };

  private onSubmit(): void {
    (this.$refs.ruleForm as any).validate(async (valid: any) => {
      if (valid) {
        // // this.$router.push({ path: "/" });
        // const data = await login(this.formInline);
        // console.log(data)
        login(this.formInline);
      } else {
        return false;
      }
    });
  }
}
</script>

<style scoped>
.LoginIndex {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
}
.left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
}
.login-from,
.title,
.welcome {
  width: 45%;
}
.welcome {
  margin-bottom: 30px;
}
.form-model {
  width: 100%;
  margin: 0 auto;
}
.title {
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, sans-serif;
}
.btn {
  width: 100%;
}
.right {
  width: 50%;
  height: 100%;
  background-image: url("../../assets/img/login/login.png");
}
</style>
