<template>
   <div>
  <div class="header_s">
  <span class="icon"><i class="iconfont icon-sousuo"></i></span>
  <div id="search" class="content">

    <input id="text" type="text" placeholder="搜索证书编号" v-model="val"> 

     
 </div>
   <div class="btn">
   <span type="button"  class="btns" @click="searchs">搜索</span>
   </div>
   </div>

   </div>
    
</template>
<script>
import util from '../../libs/util'
export default {
  data(){
      return{
          val:null, //编码号
      }
  },
  methods:{
      searchs(){
         let number = this.val
         if(number == null){
             this.Toast('请输入版权编号')
             return false
         }else{
             let _p ={
                 number
             }
             this.util.ajax.get('/admin/authCopyright/getCopyrightDataDetails.do?number='+number).then(e=>{

                
                  let state = e.data.status
            
               
                   
                      if(state == 1){
                          this.$router.push('/shen_zhong?number='+number)
                      }else if(state == 3){
                          this.$router.push('/ban_cun_zhan?number='+number)
                      }else if(state == 0){
                       this.$router.push('/shen_wan?number='+number)
                   } 

             })  
      }
  }
    
}
}
</script>
 <style lang="less">
  @import 'search.less';
 </style>
 

