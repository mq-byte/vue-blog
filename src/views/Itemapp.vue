<template>
  <div class="itemapp">
    <el-row :gutter="20">
        <el-col :xs = 24 :span="6" class="items" v-for="(v,i) in 9" :key="i">
            <el-card :body-style="{ padding: '0px' }">
                <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">gdfgdfgdfg</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

    </el-row>
  </div>
</template>
<script>
export default {
  name: 'itemapp'
}
</script>

<style lang="scss">
.itemapp{
    padding: 10px;
    .items{
        padding-top: 10px;
    }
}

</style>
