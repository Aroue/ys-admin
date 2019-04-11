<template>
  <a-list itemLayout="horizontal" :dataSource="articles">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta
        :description="item.content">
        <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
  import {ysArticleApi} from './api';
  export default {
    name: "homeArticle",
    data() {
      return {
        articles: []
      }
    },

    methods: {
      getAllArticles() {
        const params = {}
        ysArticleApi.getAllArticle(params).then(res => {
          this.articles = res.data
        })
      }
    },

    mounted() {
      this.getAllArticles()
    },

  }
</script>

<style scoped>

</style>
