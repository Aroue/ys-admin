<template>
  <div style="padding: 0px 10px;">
    <div class="article-body">
      <div class="article-title">
        <h1>{{article.title}}</h1>
      </div>
      <div class="article-time">
        <span>发布日期：</span>
        {{article.createdAt}}
      </div>
      <div class="article-content" v-html="article.content">
        {{article.content}}
      </div>

    </div>
    <a-comment>
      <a-avatar slot="avatar" icon="user" />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" @change="handleChange" :value="comment"></a-textarea>
        </a-form-item>
        <a-form-item>
          <a-button
            htmlType="submit"
            type="primary"
            @click="addComment"
          >
            添加评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <a-list
      class="comment-list"
      itemLayout="horizontal"
      :dataSource="comments"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-comment
          :author="item.nickName"
          :avatar="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'"
        >
          <p slot="content">{{item.content}}</p>
          <a-tooltip slot="datetime" >
            <span>{{item.createdAt}}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>
  </div>

</template>

<script>
  import {ysArticleApi} from './api';
  import moment from 'moment';
  import db from '../../store/user/db'

  export default {
    data() {
      return {
        article: {},

        comments: [],
        comment: '',
        submitting: false,
        moment,

      }
    },
    mounted() {
      this.getArticleDetails();
      this.getArticleComments();
    },

    methods: {
      // 获取文章详情
      getArticleDetails() {
        const params = {
          id: this.$route.params.id
        }
        ysArticleApi.getArticleDetails(params).then(res => {
          this.article = res.data
        })
      },

      // 获取文章评论
      getArticleComments() {
        const params = {
          articleId: this.$route.params.id
        }
        ysArticleApi.getArticleComments(params).then(res => {
          this.comments = res.data
        })
      },

      // 添加评论
      addComment() {
        const params = {
          userId: db.get('user').id,
          content: this.comment,
          articleId: this.$route.params.id,
        }
        ysArticleApi.addComment(params).then(res => {
          this.$message.success('评论添加成功');
          this.comment = null;
          this.getArticleComments();
        }).catch((err) => {
          this.$message.error('评论添加失败');
        })
      },

      handleChange(e) {
        this.comment = e.target.value;
      }
    },

  }
</script>

<style scoped>
.article-title, .article-time {
  text-align: center;
}
.article-time {
  padding-bottom: 15px;
}
</style>
