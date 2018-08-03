<template>
 <div class="fail">
     <div>
   <div><img src="../../static/images/faildog.png" alt=""></div>
   <span>由于您的作品某某某原因证书申请失败</span>
    <div class="fail_img">
         <span> <img src="../../static/images/1.png" alt=""></span>
         <span> <img src="../../static/images/1.png" alt=""></span>
    </div>
   </div>
   <div class="cancel_btn btn">重新申请</div>
 </div>
    
</template>
<script>
import util from '../../libs/util'
export default {
      // data(){
      //   return{
      //        name:null,
      //     number:null,

      //   }
          
      // },
      // mounted(){
      //         let name = this.$route.query.name
      //         this.name = name
      //         let number = this.$route.query.number
      //         this.number = number
      // },
      // methods:{
         


      //   }

    
}
</script>
<style lang="less">
 @import 'fail.less';
</style>