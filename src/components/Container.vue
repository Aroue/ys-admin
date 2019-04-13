<template>
  <a-layout id="components-layout-demo-top" class="layout" style="height: 100%">
    <a-layout-header style="padding: 0 300px;">
      <div class="logo">
        <a href="/"><img src="../assets/images/logo.png" height="31" width="120"/></a>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item style="font-family:serif;font-size: 18px;" :key="i" v-for="(type,i) in article_type">
          {{type.title}}
        </a-menu-item>
        <a-button style="font-family:serif;font-size: 16px;float: right; margin-top: 1%;margin-right: 15px;"
                  type="primary" @click="register">
          <a-icon type="login" />
          登陆
        </a-button>
        <a-button style="font-family:serif;font-size: 16px;float: right; margin-top: 1%;margin-right: 15px;"
                  type="primary" @click="register">
          <a-icon type="plus"/>
          注册
        </a-button>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 300px;overflow: scroll;">
      <div :style="{ background: '#fff', minHeight: '450px' }">
        <!--路由-->
        <router-view>
        </router-view>

      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      WYJ ©2019
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import {ysArticleTypeApi} from '../views/articleType/api';

  export default {
    name: "Container",
    components: {
    },
    data() {
      return {
        article_type: [],

      }
    },
    mounted() {
      this.getAllArticleType()
    },
    methods: {
      getAllArticleType() {
        const params = {}
        ysArticleTypeApi.getAllArticleType(params).then(res => {
          this.article_type = res.data
        })
      },

      register() {
        this.$router.push({path: '/login'})
      }

    },

  }
</script>
<style>
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    margin: 16px 0;
    float: left;
    line-height: 0px;
  }
</style>
