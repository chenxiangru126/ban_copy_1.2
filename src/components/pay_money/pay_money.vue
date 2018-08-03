
    <template>
    <div class="reg2_wrap">
    <!-- 交保证金 -->
   <div class="reg2_content">
      <div>版权确权证书申请费</div>
      <p><span>¥</span><span>99.0</span></p>
      <div class="reg2_contnet_con">
       <span @click="submit_e(1)"></span>
       <span @click="submit_e(2)"></span>
      </div>

   </div>
    </div> 
    </template>
    
    <script>
    import util from '../../libs/util'
    export default {
        created(){
            var that = this 
             let name = this.$route.query.name
             this.name = name
             setTimeout(()=>{
              this.userGetinfo()
              },500)
        },
        mounted(){
           
             let number = this.$route.query.number
              this.number = number
             
        },
        data(){
            return{
                number:null,
                token:null, 

            }
        },
         methods:{
              userGetinfo(){
                        var _this = this;
                        setTimeout(function(){
                        try{
                        let objdata = iosObject.getUserInfo();
                        let jsondata = eval('(' + objdata + ')');
                        window.jsondata = jsondata;
                        if(window.jsondata.token){
                           this.token = window.jsondata.token
                        }else{
                        _this.userGetinfo();
                        }
                        }catch(e){
                        _this.userGetinfo();
                        }
                        },300)
                        },
                   submit_e(a) {
                //a 支付方式 1支付宝 2微信
                     
                    var url;
                    let number = this.number 
                    let token = this.token


                    let objdata = iosObject.getUserInfo();
                        let jsondata = eval('(' + objdata + ')');
                        window.jsondata = jsondata;
                        if(window.jsondata.token){
                           this.token = window.jsondata.token
                        }else{
                        _this.userGetinfo();
                        }
                    if(a==1){  
                        url= location.protocol+'//'+location.hostname
                           +'/mall/invoice_order/payForcopyright.do?number='+number+'&money=99'+'&payWay=1'+'&token='+this.token;
                    }else if(a==2){
                         url= location.protocol+'//'+location.hostname
                               +'/mall/invoice_order/payForcopyright.do?number='+number+'&money=99'+'&payWay=2'+'&token='+this.token;
                        
                    }
                    iosObject.showCheckOrderBtn(location.origin+'/index.html#/success')
                        window.location.href=url;    
                                     
            } 
         }
        
        
        
    }
    </script>
    <style lang="less">
    @import 'pay_money.less';
    </style>
    