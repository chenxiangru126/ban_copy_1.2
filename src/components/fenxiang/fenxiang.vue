<template>
    <div class="fenxiang">
      <img :src="url" alt="">
    </div>
</template>
<script>
import util from '../../libs/util'
export default {
 mounted(){
     let number = this.$route.query.number
     this.number = number
     let _p ={
         number
     }
     this.util.ajax.post('/admin/authCopyright/getCopyrightDataList.do',_p).then(e=>{
        let url = e.data.url
     })
 },
 data(){
     return{
      url:null, //图片路径
      number:null, //版权证书号
     }
 }    
}
</script>
<style lang="less">
 @import 'fenxiang.less';
</style>

