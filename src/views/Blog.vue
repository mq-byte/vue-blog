<template>
  <div class="blog">
    <el-collapse accordion>
      <el-collapse-item v-for="(v,i) in bloglists" :key="i" :title="(i+1)+ '. ' + v.type" :name="i">
        <el-card class="box-card">
          <div v-for="(v1,i1) in v.MDs" :key="i1" class="blogitems">
            <el-alert
              :title="v1"
              type="success"
              :closable="false">
            </el-alert>
          </div>
        </el-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'blog',
  computed:{
    bloglists(){
      return this.$store.state.blogs.bloglists
    }
  }
}
</script>
<style lang="scss">
.blog{
  padding: 10px;
  .blogitems{
    margin-bottom: 10px;
  }
}
</style>
