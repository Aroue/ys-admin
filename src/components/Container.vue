<template>
  <a-layout id="components-layout-demo-top" class="layout" style="height: 100%">
    <a-layout-header>
      <div class="logo"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item :key="i"  v-for="(type,i) in article_type">{{type.title}}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Article</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
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

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 5',
    },
    {
      title: 'Ant Design Title 6',
    },
  ]
  export default {
    name: "Container",
    data() {
      return {
        article_type: [],
        data
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
      menuKey() {
        (this.menu_item_key)++
      }
    },
    computed() {

    }

  }
</script>
<style>
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, .2);
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
