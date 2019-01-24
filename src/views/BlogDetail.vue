<template>
  <div class="blog-detail">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{type}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="blogDetail" v-html="blogDetail"></div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {mdToHTML} from '../../utils/utils'
// hljs.initHighlightingOnLoad();

export default {
  name: 'blogDetail',
  props:['type','name'],
  mounted(){
    this['blogs/getblog']({type:this.type,name:this.name});
  },
  methods:{
      ...mapActions(['blogs/getblog'])
  },
  computed:{
      blogDetail(){
          let str = this.$store.state.blogs.blogDetail;
          let strHtml = mdToHTML(str);
          return strHtml;
      }
  },
  updated(){
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
    
  }
}
</script>
<style lang="scss">
.blog-detail{
    .el-breadcrumb{
        line-height: 50px;
        padding: 0 10px;
    }
    .blogDetail{
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }
}
</style>
