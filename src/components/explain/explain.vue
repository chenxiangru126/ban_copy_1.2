<template>
    <div class="explain">
         <h3 style="color:#D1324E">中云文化大数据</h3>
          <div style="padding:0">
              <img src="../../static/images/explian_img1.png" alt="">
          </div>
           <h3 style=" font-size: .933333rem;">中国文化(出版广电)大数据产业平台</h3>
           <p>国家行业大数据中心</p>
           <p>国家“互联网+”重大文化产业工程</p>
           <p>注册资本5.2亿人民币</p>
           <div>
              <img src="../../static/images/explian_img2.png" alt="">
          </div>
          <p>面向全国著作权用户进行互联网版权存证和登记</p>
          <p>数字版权一站式服务</p>
          <p>即时精准证明作品的登记时间、权利人信息</p>
          <div>
              <img src="../../static/images/explian_img3.png" alt="">
          </div>
          <p>国内顶尖的全网监测中心</p>
          <p>互联网海量数据分析</p>
          <p>为权利方提供版权实时监测服务</p>
          <div>
              <img src="../../static/images/explian_img4.png" alt="">
          </div>
           <p>政府、行业协会、律师事务所</p>
           <p>一体化链条式下架维权联动机制</p>
           <p>下线处理、诉讼维权一站式综合服务</p>
          

             <p style="margin-top:47px;letter-spacing:1px;">中云文化大数据科技有限公司</p>
              <p><a href="http://www.zhongyunwenhua.cn" style="color:#4A8ADA;text-decoration:none">www.zhongyunwenhua.cn</a></p>
               <div class="submit-btn-1  btn_btns" @click="dianji" >
                我知道了
            </div>
      
    </div>
</template>

<style lang="less">
    @import 'explain.less';
</style>

<script>
   import util from '../../libs/util.js'
    export default {
        data() {
            return {
                share_log: false,
               
              
            }
        },
        created(){
           
        },
        mounted() {
            
        },
        methods: {
                // 加token
       
            dianji(){
                this.util.ajax.post('/admin/users/bqCount.do?token=a306d11e-fd07-4d74-9c77-ac63976b9607').then(e=>{
                    if(e.code == 200){
                     this.$router.push('/select')
                    } 
                })
                
            } 
         
        }
    }
</script>


