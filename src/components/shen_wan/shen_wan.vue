<template>
<div class="ban_cun">
   <div class="click_weier" @click="goto"></div>
   <div class="once_er" @click="goto_er"></div>
  <!-- 加上调用分享的弹出层 -->
    <div class="ser_img" v-if="isShare" @click="ser_on" >
      
        <img  src="../../static/images/ssss-ios.png"  />
    </div>
   <div class="wan_img">
       <img :src="b_url" alt="">
       <img :src="url1" alt="">
       <img :src="url2" alt="">
      
   </div>
     <div class="agree ">
             <div style="font-size:1rem;text-align:center">变更信息</div>
             <p>暂无变更信息</p>
           
    </div> 

       <div class="share" v-show="share">
            <div class="share_m">
                <p><span></span><label>分享到</label><span></span></p>
                <div class="share_i"><img  src="../../static/images/circle@3x.png"/><img  src="../../static/images/wechat@3x.png"/>
                    <img  src="../../static/images/qq4x@3x.png"/><img  src="../../static/images/weibo@3x.png"/></div>
            </div>
        </div>
</div>

    
</template>
<script>
import  util from '../../libs/util'
export default {
 
    mounted(){
      // 请求申请成功显示证书
        let number = this.$route.query.number
        this.number = number
        let _p ={
          number
        }
        this.util.ajax.post('/admin/authCopyright/getCopyrightDataDetails.do',_p).then(e=>{
          //获取url
          if(e.code == 200){
               this.url1 = e.data.c_url1
                this.url2 = e.data.c_url2
                this.b_url = e.data.b_url
          }

        })
        
       
    },
    data(){
      return{
       number :null,
        isShare:true,
        share:false,
         url1:null,
          url2:null,
          b_url:null,
      }

    },
    methods:{
          ser_on(){   
            this.share = !this.share
            let number = this.number  
            let ur = '/index.html#/fenxiang?number='+numbe
            let str = base64.base64encode(ur);
            let url = window.location.host+'/mall/toGoodsShareUrl/usl/'+str
            // alert("base64 encode:" + str);  http://59.110.169.175:8081/index.html#/
                //解密
            //    let str1 = base64.base64decode(str);
            //     alert("base64 decode:" + str1);
            iosObject.shareContentTitlePicUrl(this.goodsInfo.goodsDescribe,this.goodsInfo.goodsName,this.goodsInfo.sharePhoto,url); 
            // this.share = !this.share

          },
          goto(){
            let number = this.number 
              this.$router.push('/zheng_detail?number='+number)

          },
           goto_er(){
            let number = this.number 
              this.$router.push('/zheng_detail?number='+number)
          }
           
        },
    }
    

</script>
<style lang="less">
@import 'shen_wan.less';
</style>