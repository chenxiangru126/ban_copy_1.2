
    <template>
    <div class="reg2_wrap">
    <!-- 交保证金 -->
   <div class="reg2_content">
      <div>作品加密费</div>
      <p><span>¥</span><span>1.00</span></p>
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
            
        },
         data(){
             return{
                 name:null, //作品名 
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
                    let name = this.name 
                    debugger;
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
                           +'/mall/invoice_order/payForcopyright.do?number='+name+'&money=1'+'&payWay=1'+'&token='+this.token;
                    }else if(a==2){
                         url= location.protocol+'//'+location.hostname
                               +'/mall/invoice_order/payForcopyright.do?number='+name+'&money=1'+'&payWay=2'+'&token='+this.token;
                        
                    }
                    iosObject.showCheckOrderBtn(location.origin+'/index.html#/make')
                        window.location.href=url;    
                                     
            } 
         }
        
    }
    </script>
    <style lang="less">
    @import 'secret.less';
    </style>
    
    
    