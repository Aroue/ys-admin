<template>
  <el-container>
    <el-header >健康养生论坛</el-header>
    <el-main>
      Main
      <!--路由-->
      <!--<router-view>-->
      <!--</router-view>-->
    </el-main>
    <el-footer>@2019 WYJ</el-footer>
  </el-container>
</template>

<script>
  import {ysArticleTypeApi} from '../views/articleType/api';
  export default {
    name: "Container",
    data() {
      return {
        article_type: []
      }
    },
    mounted() {
      this.getAllArticleType()
    },
    methods: {
      getAllArticleType() {
        const params = {

        }
        ysArticleTypeApi.getAllArticleType(params).then(res => {
          this.article_type = res.data
        })
      }
    }

  }
</script>

<style scoped>
  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #100310;
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    font-size: 24px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5),
  .el-container:nth-child(6)  {
    line-height: 260px;
  }

  .el-container:nth-child(7)  {
    line-height: 320px;
  }

</style>
