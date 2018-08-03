<template>
 <div class="success">
     <div>
   <div><img src="../../static/images/shenhe.png" alt=""></div>
   <span>您的版权登记证书申请已提交</span>
   <span>1~15个工作日您可以通过</span>
   <span>【个人中心-版权】点击查询</span>
   </div>
   <div class="submit-btn-1 btn" @click="go_list">返回版权登记列表</div>
    <div class="mask">   
    </div>

 </div>
    
</template>
<script>
import { Indicator,Toast } from 'mint-ui';
import util from '../../libs/util'
export default {
   created(){

     var that = this 

     that.util.ajax.get('/mall/invoice_order/checkPay.do').then((e)=>{
                    if(e.code != 200){
                    that.$router.push('/pay_money?number='+'支付')  
                    return false;
                    }else{
                      setTimeout(()=>{
                           // 调用临时接口查询数据
                          that.util.ajax.post('/admin/copyrightTemp/getId.do').then(e=>{
                          let data = e.data
                          data = JSON.parse(data)  
                          //得到名称和url还有证书编码     
                          // 在这里在真正保存的请求
                          that.initData(data)        
                      })
                    },1000)
                  }
                })

    },
     mounted(){
        this.loading();
     },
     methods:{
        loading(){
             Indicator.open({spinnerType: 'fading-circle'});
              
        },
        go_list(){
          this.$router.push('/reg_list')
        },
          initData(data){
            let _p = data
         this.util.ajax.post('/admin/register/save.do',_p).then(e=>{
      
          //  跳转到展现的页面
              //返回证书编码和url图片
                   if(e.code != 200){    
                     Indicator.close();     
                     $('.mask').hide()             
                   }
           })
     }
     }
}
</script>
<style lang="less">
 @import 'success.less';
</style>


