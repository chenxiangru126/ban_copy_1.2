<template>
<div class="make">
  <div><img src="../../static/images/make_dog.gif" alt=""></div>
  <span style="font-size:1.6rem;" >版权存证证书生成中</span>
  <span style="font-size:1.2rem;margin-top: 1.666667rem">请耐心等待...</span>
</div>
    
</template>
<script>
import util from '../../libs/util'
export default {
   created(){

     var that = this 

     that.util.ajax.get('/mall/invoice_order/checkPay.do').then((e)=>{
                    if(e.code != 200){
                    that.$router.push('/secret?name='+'支付')  
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
        
  },
  data(){
    return{
      
    }
  },
  methods:{
    // 加token
     initData(data){
         this.util.ajax.post('/admin/authCopyright/save.do',data).then(e=>{
  
          //  跳转到展现的页面
              //返回证书编码和url图片
                   if(e.code == 200){
                    let url1 = e.data.bc_certificate_url1
                     let url2 = e.data.bc_certificate_url2 
                  let number = e.data.block_cert_number
                  let name = e.data.name 
                 this.$router.push('/ban_cun_zhan?name='+name+'&url1='+url1+'&number='+number+'&url2='+url2)         
                   }else {   
                       this.Toast(e.message)
                       setTimeout(()=>{
                           this.$router.push('/ban_copy')
                       },3000)
                   }
              
           })


     }
       
  }
  
    
}
</script>
 <style lang="less">
 @import 'make.less';
 
 </style>