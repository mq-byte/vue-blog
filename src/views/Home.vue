<template>
  <div class="home">
    <el-row>
      <el-col :xs = 24 :span="8">
        <div class="person">
          <div class="person-img">QLQ</div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>个人信息</span>
            </div>

            <p>
              <span>作者：</span>
              <span>邱阳</span>
            </p>
            <p>
              <span class="fl">QQ：</span>
              <span class="fl">
                <a class="qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1736315428&site=qq&menu=yes">
                  <img border="0" src="http://wpa.qq.com/pa?p=2:1736315428:51" alt="联系作者" title="联系作者"/>
                </a>
              </span>
            </p>
            <p>
              <span>Github：</span>
              <span><a target="_blank" href="https://github.com/QiuyangQ">点击查看</a></span>
            </p>
            <p>
              <span class="">CSDN：</span>
              <span><a target="_blank" href="https://blog.csdn.net/qq_31631167">点击查看</a></span>
            </p>
          </el-card>
          
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>技能点</span>
            </div>
            <el-alert
              v-for="(v,i) in skills"
              :key="i"
              :title="v"
              type="info"
              :closable="false"
              class="skill"
              >
            </el-alert>
            
          </el-card>
        </div>

      </el-col>
      <el-col :xs = 24 :span="16">
        
        <el-row class="blogBox">


          <el-col :xs = 24 :span="12" v-for="(v,i) in bloglists" :key="i" class="blog-item">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{v.type}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">点击查看</el-button>
              </div>
              <div v-for="(v1,i1) in v.MDs" :key="i1">
                {{v1}}
              </div>
            </el-card>
          </el-col>

        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      skills:[
        '1.可以使用vue，react，angular快速开发，其中较熟悉vue',
        '2.了解vue源码，深入理解OOP，AOP，MVC，MVVM的编程思想',
        '3.熟悉原生js与js设计模式，可脱离框架设计高质量的web项目',
        '4.监控网页性能，并给出相应的方案提升网页性能',
        '5.熟悉es6，es7，typescript，flow',
        '6.熟悉H5新特性离线开发与CSS3动画提升用户体验',
        '7.熟悉项目自动化构建与部署，熟练使用webpack，gulp，rollup构建工具',
        '8.可以独立开发微信小程序，混合app',
        '9.可使用nodejs构建中间层，熟悉express，koa，egg，并使用pm2部署到线上服务',
        '10.可以使用MySql设计数据库表，使用redis存放服务器缓存，如session，临时用户信息',
        '11.可使用nginx代理端口解决跨域问题',
        '12.了解java，spring，springMVC，MyBatis'
      ]
    }
  },
  computed:{
    bloglists(){
      return this.$store.state.blogs.bloglists
    }
  }
}
</script>

<style lang="scss">
.home{
  .person{
    padding: 10px;
  }
  .person-img{
    margin: 10px auto;
    width: 100px;
    height: 100px;
    background: #303133;
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
    color: white;
    font-size: 25px;
  }
  .box-card p>span{
    // float: left;
    overflow: hidden;
  }
  .box-card p{
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
    height: 30px;
  }
  .qq{
    display: block;
    width: 79px;
    height: 25px;
    overflow: hidden;
    float: left;
    margin-top: 3px;
  }
  .qq>img{
    float: left;
  }
  .box-card{
    margin-top: 20px;
  }
  .skill{
    margin-bottom: 10px;
  }
  .blogBox{
    padding: 0 10px;
    box-sizing: content-box;
  }
  .blog-item{
    padding: 0 10px;
    // box-sizing: content-box;
  }
}
</style>
