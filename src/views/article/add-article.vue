<template>
  <div>
    <CompEditor ref="detail_editor" v-model="articleForm.content"></CompEditor>
  </div>

</template>

<script>
  import CompEditor from '../../components/editor';
  export default {
    components: {
      CompEditor
    },
    data() {

      return {
        articleForm: {
          content: '',
        }
      }
    }
  }
</script>

<style scoped>

</style>
