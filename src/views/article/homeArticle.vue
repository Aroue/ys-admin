<template>
  <div>
    <Carousel></Carousel>
    <div v-if="articles.length !== 0">
      <a-list
        itemLayout="vertical"
        size="large"
        :dataSource="articles"
      >
        <a-list-item style="padding-left:10px" slot="renderItem" slot-scope="item, index" key="item.id">
          <template slot="actions">
            <span >
              <a-icon :type="'star-o'" style="margin-right: 8px"/>
              {{item.commentCount}}
            </span>
            <span >
              <a-icon :type="'like-o'" style="margin-right: 8px"/>
              {{item.commentCount}}
            </span>
            <span >
              <a-icon :type="'message'" style="margin-right: 8px"/>
              {{item.commentCount}}
            </span>
          </template>
          <img slot="extra" width="272" alt="logo"
               src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
          <a-list-item-meta>
            <p slot="title">
              <router-link :to="'/article/' + item.id">
                <a style="color: rgba(0, 0, 0, 0.65);">{{item.title}}</a>
              </router-link>
              <span style="font-size: 14px;padding-left: 56px;color: rgba(0, 0, 0, 0.65);">{{item.createdAt}}</span></p>
            <a-avatar slot="avatar" icon="user" />
          </a-list-item-meta>
          <span class="article-content">{{item.delHTMLTagContent}}</span>
        </a-list-item>
      </a-list>
    </div>
    <div v-if="articles.length === 0" style="text-align: center;padding-top: 20%">暂时没有文章哟！</div>

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
          {type: 'star-o', text: ''},
          {type: 'like-o', text: ''},
          {type: 'message', text: ''},
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
    height: 100px;
  }

</style>
