<template>
  <div class="login-wrapper">
    <div class="model">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">登录</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="User" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="View" v-model="user.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        userName: "",
        userPwd: ""
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.userForm.validate((valid) => {
        //ref提供一个操作原生DOM的句柄
        if (valid) {
          // 一种请求方法
          // this.$request.get()
          console.log("api： ", this.$store);
          console.log("11111", this.user);
          console.log("api： ", this.$store);
          // storage.setItem("userInfo", this.user);
          this.$api
            .login(this.user)
            .then((res) => {
              this.$store.commit("saveUserInfo", res);
              console.log("2222store Res: ", res);
              this.$router.push("./welcome");
              console.log("成功发送login请求");
            })
            .catch((error) => {
              console.error("Login Error: ", error);
            });
        } else {
          return false;
        }
      });
    },
    goHome() {
      this.$router.push("./welcome");
    }
  }
};
</script>
<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .model {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 0px 11px 1px #c7c9cd4b;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
