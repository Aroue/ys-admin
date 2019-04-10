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
    name: "homeArticle",
    data() {
      return {
        data,
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
