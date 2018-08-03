<template>
  <!-- 绑定手机号操作 -->
    <div class="register">
       <div class="input_b">
            <div class="w h3 line-h-3 flex-h b-b m-t">
                <div class="flex-1 c1 font-3 t-c">手机号</div>
                <div class="flex-3 flex-h" style="border-bottom: .0625rem solid #9E9E9E;">
                    <input type="text" placeholder="请输入手机号" class="flex-3 "  v-model="tel_phone">
                     <span class="flex-2 c6" @click="get_code" v-show="!get_code_show">获取验证码</span>
                     <span class="flex-2 c6" v-show="get_code_show">{{timers}}s</span>
                </div>
            </div>
               <div class="w h3 line-h-3 flex-h b-b" style="margin-top:14px">
                <div class="flex-1 c1 font-3 t-c"></div>
                <div class="flex-3 flex-h " >
                    <input type="text" placeholder="请输入验证码"  style="border-bottom: .0625rem solid #9E9E9E" class="flex-3 " v-model="yan_code">
                     <span class="flex-2">  </span>  
                </div>
            </div>
            <div class="w h3 line-h-3 flex-h b-b" style="margin-top:30px">
                <div class="flex-1 c1 font-3 t-c" style=" letter-spacing: .9375rem;">密码</div>
                <div class="flex-3 flex-h" style="border-bottom: .0625rem solid #9E9E9E">
                    <input type="text" placeholder="请输入8位字母或数字"  class="flex-3 "  id="input_pwd" v-model="mi_code">
                     <span class="flex-1 c6 t-r" v-show="is_show" @click="handle_click_show"><img src="../../static/images/browse.png" alt="" ></span>
                     <span class="flex-1 c6 t-r" v-show="!is_show" @click="handle_click_hide"><img src="../../static/images/yincang.png" alt="" ></span>
                </div>
                </div>
            <div class="agree t-c c1">绑定即表示同意<a href="javascript:;">《用户协议》</a>
            <div class="submit-btn-1" style="margin: 27px 0 0 0"  @click="get_reg">
               绑定
            </div>
             </div>
            </div>
    </div>


    
</template>
<script>
 
export default {
    data(){
        return{
           is_show:true,
           timers:59,
           get_code_show:false,
           tel_phone:null, //手机号
           yan_code:null, //验证码
           mi_code:null, //密码
        }
    },
    methods:{
      handle_click_show(){
          this.is_show = !this.is_show;
          $("#input_pwd").attr('type','password')
         
      },
      handle_click_hide(){
          this.is_show = !this.is_show;
           $("#input_pwd").attr('type','text')
      },
      get_code(){
        //  要先判断是不是有电话号码还有格式是否正确
        let  myreg=/^[1][3,4,5,7,8][0-9]{9}$/
            let phone = this.tel_phone
          if(phone != null && myreg.test(phone)){
            this.get_code_show = true;     
          let timer;
           timer = this.timers;
        //  点击以后就要发送请求   
        //在进行时间判断
         let interTimer = setInterval(()=>{              
              if(timer == 0){
               clearInterval(interTimer)
               this.get_code_show = false;
                this.timers = 59;
                if(this.yan_code == null){
                    this.Toast('请重新获取验证码')
                }           
              }else{
                   timer--;
                 this.timers = timer; 
              }
          },1000)
            // 这这里发送请求
              let _p = {
                updateType:1,
                phone
              }
            this.util.ajax.get('admin/sysUserReal/sendCode.do?updataType=1&phone='+phone).then(e=>{  
                 if(e.code ==200){
                      this.Toast('验证码发送成功')
                     this.get_yan_code = e.data;  
                 }
 
              })
          }else{
             this.Toast('请输入手机号')          
          }
      },
      get_reg(){
       // 这里是绑定步骤
            let phone = this.tel_phone;
            let code = this.yan_code;
            let password = this.mi_code;
            let get_yan_code = this.get_yan_code;
            if(code != get_yan_code || get_yan_code ==null){  
                this.Toast('请输入正确的验证码') ; 
                return false;    
            }else if(password ==null){
              this.Toast('请输入密码')
              return false;    
            }else{
                let _p = {
                   phone,
                   code,
                   password 
                }
              this.util.ajax.get('/admin/sysUserReal/regOrUpdate.do?phone='+phone+'&code='+code+'&password='+password).then(e=>{
                    if(e.code == 200){
                     this.$router.push('/real')    
                    }

              })

            }

      },
      aaa(){
          this.util.ajax.post('/mall/shop_type/getList.do').then(e=>{
             console.log(e.code)

          })

      }




    }
        


} 

</script>


<style lang="less">
@import "register.less";
</style>


