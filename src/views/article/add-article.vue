<template>
  <div>
    <el-form :model="articleForm" :rules="rules" ref="articleForm" label-width="100px" class="type-articleForm">
      <el-form-item label="文章标题" prop="title">
        <el-input style="width: 325px" v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="typeId">
        <el-select v-model="articleForm.typeId" placeholder="请选择文章分类">
          <el-option
          v-for="item in article_type"
          :key="item.id"
          :label="item.title"
          :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <CompEditor ref="detail_editor" v-model="articleForm.content"></CompEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="addArticle('articleForm')"
                   class="submit-button">发布
        </el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
  import CompEditor from '../../components/editor';
  import {ysArticleTypeApi} from '../articleType/api';
  import db from '../../store/user/db';
  import {ysArticleApi} from "./api";

  export default {
    components: {
      CompEditor
    },
    data() {

      return {
        article_type: [],
        articleForm: {
          title: '',
          content: '',
          typeId: '',
          userId: '',
        },
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
          ],
        }

      }
    },
    methods: {
      getAllArticleType() {
        const params = {}
        ysArticleTypeApi.getAllArticleType(params).then(res => {
          this.article_type = res.data
        })
      },

      addArticle(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            const params = {
              title: this.articleForm.title,
              userId: db.get('user').id,
              content: this.$refs['detail_editor'].getEditorContent(),
              typeId:  this.articleForm.typeId,

            }
            ysArticleApi.addArticle(params).then(res => {
              this.$router.push({path: '/'})
              this.$message.success("文章添加成功");
            }).catch((err) => {
              this.$message.error(err.message);
            })
          }
          else {
            this.$message.error('输入有误，请重新输入！');
            return false;
          }
        })
      },

    },

    mounted() {
      this.getAllArticleType();
    }

  }
</script>

<style scoped>
  .type-articleForm {
    padding: 20px 0px;
  }

</style>
