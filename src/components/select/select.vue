<template>
 <div class="select">
<div class="reg_content">
    <div class="content_con">
        <div class="geren flex-v flex-j-c" @click="person_ban">
          <span><i class="iconfont icon-gerens"></i></span>
          <span style="margin-top:50px">个人</span>
        </div>
        <div class=" qiye flex-v flex-j-c" @click="com_ban">
          <span ><i class="iconfont icon-qiye"></i></span>
          <span style="margin-top:50px">企业</span>
        </div>
    </div>

 </div>  
        
        
 </div>     
</template>
<script>
export default {
  methods:{
    person_ban(){
       this.$router.push('/real')
    },
    com_ban(){
      this.$router.push('/qiye')
    }
  }
    
}
</script>
<style lang="less">
@import 'select.less';
</style>


