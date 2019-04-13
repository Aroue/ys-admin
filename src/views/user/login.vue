<template>
  <div class="ys-login">
    <a-card class="login-container" title="健康养生论坛" :hoverable="true">
      <el-form :model="formData" status-icon :rules="loginRules" ref="formData" label-width="80px">
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
        <el-form-item label-width="0px">
          <el-checkbox v-model="remember">记住我</el-checkbox>
          <a class="login-form-register" @click="showDrawer">
            没有账号？注册
          </a>
        </el-form-item>

        <el-button
          style="width: 40%;"
          type="primary"
          @click="submitForm">
          登录
        </el-button>
      </el-form>
    </a-card>

    <a-drawer
      title="用户注册"
      placement="right"
      :closable="false"
      @close="onClose"
      :width="450"
      :visible="visible">

      <el-form ref="ruleForm" status-icon :rules="rules" :model="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="ruleForm.nickName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" ></el-input>
        </el-form-item>
        <el-form-item label="个性签名" prop="autograph">
          <el-input v-model="ruleForm.autograph" ></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="ruleForm.phone" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegisterForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </a-drawer>

  </div>


</template>

<script>
  import {ysUserApi} from "./api";
  import {isvalidPhone} from '../../tools/utils';
  import db from '../../store/user/db'

  export default {
    name: "login",
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let validPhone=(rule, value,callback)=>{
       if (!isvalidPhone(value)){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
          callback()
        }
      };
      return {
        formData: {
          userName: '',
          password: ''
        },
        remember: false,
        visible: false,
        ruleForm: {
          userName: '',
          nickName: '',
          password: '',
          checkPass: '',
          email: '',
          autograph: '',
          phone: '',
        },
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        },

        rules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          nickName: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ],
          password: [
            {required: true,validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ],
          email: [
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          phone: [
            {validator: validPhone, trigger: 'blur' }
          ]
        }
      }
    },

    methods: {

      submitForm() {
        const params = {
          ...this.formData
        };
        ysUserApi.getUser(params).then(res => {
          db.set('user', res.data);
          db.set('login', true);
          this.$router.push({path: '/'})
        }).catch((err) => {
          db.remove('login');
          db.remove('user');
          this.$message.error(err.message);
        })

      },
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.userRegister();
          } else {
            this.$message.error('输入有误，请重新输入！');
            return false;
          }
        });
      },
      userRegister() {
        const params = {
          ...this.ruleForm
        };
        ysUserApi.Register(params).then(res => {
          this.$message.success('注册成功');
          this.resetForm('ruleForm');
          this.onClose();
        }).catch((err) => {
          this.$message.error('注册失败');
        })

      },
      showDrawer() {
        this.visible = true
      },
      onClose() {
        this.visible = false
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

    }

  }
</script>


<style scoped>
  .ys-login {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/1.jpeg");
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
    height: 30%;
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
    min-height: 300px;
  }

  .login-form-register {
    margin-left: 155px;
  }

</style>
