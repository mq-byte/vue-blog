<template>
  <div id="app">
    <el-row class="header">
      <el-col class="hidden-xs-only" :span="16">
        <el-menu default-active="1"  mode="horizontal">
          <!-- <el-menu-item index="0">首页</el-menu-item> -->
          <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
          <router-link to="/blog"><el-menu-item index="2">技术分享</el-menu-item></router-link>
          <router-link to="/itemapp"><el-menu-item index="3">个人项目</el-menu-item></router-link>
        </el-menu>
      </el-col>
      <el-col :sm = {span:8} :span="24">
        <el-cascader
          placeholder="请输入文章名"
          :options="bloglists"
          filterable
        ></el-cascader>
      </el-col>
    </el-row>
    <div style="height:60px;"></div>
    <div class="hidden-sm-and-up" style="height:50px;"></div>
    <el-row class="hidden-sm-and-up border-bottome6 fixedhead">
      <el-col >
        <el-collapse accordion>
          <el-collapse-item title="目录" name="1">
            <el-menu default-active="1">
              <!-- <el-menu-item index="0">首页</el-menu-item> -->
              <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
              <router-link to="/blog"><el-menu-item index="2">技术分享</el-menu-item></router-link>
              <router-link to="/itemapp"><el-menu-item index="3">项目经验</el-menu-item></router-link>
            </el-menu>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name:'app',
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {
    this['blogs/initbloglists']();
  },
  computed:{
    bloglists(){
      let blogitems = []
      for(let v of this.$store.state.blogs.bloglists){
        let blogitem = {
          value:v.type,
          label:v.type,
          children:[]
        }
        for(let v1 of v.MDs){
          let blogitemchild = {
            value:v1,
            label:v1
          }
          blogitem.children.push(blogitemchild);
        }
        blogitems.push(blogitem);
      }
      return blogitems
    }
  },
  methods:{
    ...mapActions(['blogs/initbloglists'])
  }
}
</script>

<style lang="scss">
  #app{
    .el-menu--horizontal>a>.el-menu-item {
      float: left;
      height: 60px;
      line-height: 60px;
      margin: 0;
      border-bottom: 2px solid transparent;
      color: #909399;
    }
    .el-menu--horizontal>a>.el-menu-item.is-active {
      border-bottom: 2px solid #409EFF;
      color: #303133;
    }
    .el-menu.el-menu--horizontal {
        // border-bottom: solid 1px #e6e6e6;
        border-bottom: none;
    }
    .el-cascader{
      display: block;
      width: 206px;
      margin: 0 auto;
      margin-top: 10px;
    }
    .header{
      border-bottom: solid 1px #e6e6e6;
      height: 60px;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      background: white;
      z-index: 10;
    }
    .fixedhead{
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      z-index: 10;
    }
    .el-menu-item{
      text-align: center;
    }
    .el-collapse-item__header::before{
      content: '';
      padding-left: 20px;
    }
  }
</style>
