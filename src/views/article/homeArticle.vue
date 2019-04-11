<template>
  <div>
    <Carousel></Carousel>
    <!--<a-list itemLayout="horizontal" :dataSource="articles" class="article-list">-->
    <!--<a-list-item slot="renderItem" slot-scope="item, index">-->
    <!--<a-list-item-meta-->
    <!--:description="item.content">-->
    <!--<a slot="title" href="https://vue.ant.design/">{{item.title}}</a>-->
    <!--<a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>-->
    <!--</a-list-item-meta>-->
    <!--</a-list-item>-->
    <!--</a-list>-->
    <div>
      <a-list
        itemLayout="vertical"
        size="large"
        :dataSource="articles"
      >
        <a-list-item style="padding-left:10px" slot="renderItem" slot-scope="item, index" key="item.title">
          <template slot="actions" v-for="{type, text} in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{text}}
        </span>
          </template>
          <img slot="extra" width="272" alt="logo"
               src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
          <a-list-item-meta>
            <a slot="title">{{item.title}}</a>
            <a-avatar slot="avatar" :src="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'"/>
          </a-list-item-meta>
          <span class="article-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</span>
        </a-list-item>
      </a-list>
    </div>
  </div>

</template>

<script>
  import Carousel from '../../components/Carousel';
  import {ysArticleApi} from './api';

  export default {
    name: "homeArticle",
    components: {
      Carousel
    },
    data() {
      return {
        articles: [],
        actions: [
          {type: 'star-o', text: '156'},
          {type: 'like-o', text: '156'},
          {type: 'message', text: '2'},
        ],
      }
    },

    methods: {
      getAllArticles() {
        const params = {}
        ysArticleApi.getAllArticle(params).then(res => {
          this.articles = res.data
        })
      },

    },

    mounted() {
      this.getAllArticles()
    },

  }

</script>

<style scoped>
  .article-list {
    padding: 2px 10px;
  }

  .article-content {
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

</style>
