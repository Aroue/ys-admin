<template>
  <div class="ys-login">
      <a-card class="login-container" title="健康养生论坛" :hoverable="true">
        <el-form :model="formData"  ref="formData" label-width="70px">
          <el-form-item prop="userName" label="用户名:">
            <el-input
              v-model="formData.userName"
              placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
            >
            </el-input>
          </el-form-item>

          <el-button
            style="width: 60%;"
            type="primary"
            @click="submitForm">
            登录
          </el-button>
        </el-form>
      </a-card>

  </div>


</template>

<script>
  import {ysUserApi} from "./api";
  import db from '../../store/user/db'
  import {message} from "ant-design-vue";

  export default {
    name: "login",
    data() {
      return {
        formData: {
          userName: '',
          password: ''
        }
      }
    },

    methods: {

      submitForm() {
        console.log(this.formData.userName + " " +  this.formData.password);
        const params = {
          ...this.formData
        };
        console.log(params)
        ysUserApi.getUser(params).then(res => {
          db.set('user', res.data);
          db.set('login', true);
          console.log(res.data)
        }).catch((err) => {
          db.remove('login');
          db.remove('user');
          message.error("failed", 2)
        })

      },

    }

  }
</script>


<style scoped>
  .ys-login {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-width: 1000px;
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 25%;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    overflow: hidden;
    min-width: 270px;
    text-align: center;
    letter-spacing: 2px;
    color: #505458;
  }

</style>
