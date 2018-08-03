<template>
  <!-- 实名认证 -->
  <div>
   <div class="real">
      <div class="input_b">
            <div class="w h3 line-h-3 flex-h b-b m-t">
                <div class="flex-1 c1 font-1 ">真实姓名</div>
                <div class="flex-3">
                    <input type="text" placeholder="输入真实姓名"  class="_input" v-model="real_name">
                </div>
            </div>
            <div class="w h3 line-h-3 flex-h b-b">
                <div class="flex-1 c1 font-1 ">证件号码</div>
                <div class="flex-3">
                    <input type="text" placeholder="输入身份证号"  class="_input" v-model="card_num">
                </div>
            </div>
            <div class="w h3 line-h-3 flex-h b-b m-t">
                <div class="flex-1 c1 font-1 ">性别</div>
                <div class="flex-3">
                    <label class="check_box" style="color: #9E9E9E;font-size:.75rem; margin-right: 1.75rem"><input type="radio" name="sex" checked @click="sex(1)">&nbsp;&nbsp;男</label>
                   <label class="check_box" style="color: #9E9E9E; font-size:.75rem"><input type="radio" name="sex" @click="sex(2)">&nbsp;&nbsp;女</label>
                </div>
            </div>
            <div class="w h3 line-h-3 flex-h b-b m-t">
                <div class="flex-1 c1 font-1 ">民族</div>
                <div class="flex-3">
                    <input type="text" placeholder="输入民族"  class="_input" v-model="nation">
                </div>
            </div>
           <div class="w h3 line-h-3 flex-h b-b m-t" @click='open_address'>
                <div class="flex-1 c1 font-1 ">地址</div>
                <div class="flex-3">
                    <p class="font-0 c2 right-2" v-if='area_address'>{{area_address}}</p>
                    <p class="font-0 c2 right-2" v-else>输入地址</p>
                </div>
            </div >
              <!--证件正面  -->
            <p class="c1 font-0  p-t"  style="color:#BABABA;box-sizing:border-box;margin: .325rem 0;">身份证正面：</p>
            <div class="upload"  @click="trigger_file">
              <img :src="avatar" alt=""  class="show_img" v-show="avatar !== null"> 
              <div class="input_cssY">
              <img src="../../static/images/shenfen.png" alt=""  style="width:113px;height:27px" v-show="avatar == null">  
             </div>   
            </div> 
            <!-- 证件背面 -->
            <p  class="c1 font-0  p-t "  style="color:#BABABA;box-sizing:border-box;margin: .325rem 0;">身份证背面：</p>
            <div class="upload" @click="pick_file">
            <img :src="avar_fan" alt=""  class="show_img" v-show="avar_fan !== null"> 
            <div class="input_cssY" >
            <img src="../../static/images/shenfen.png" alt="" style="width:113px;height:27px" v-show="avar_fan == null"> 
            </div> 
            </div>

             <!-- 手持身份证 -->
            <p  class="c1 font-0  p-t "  style="color:#BABABA;box-sizing:border-box;margin: .325rem 0;">手持身份证：</p>
            <div class="upload" @click="pick_file_shou">
            <img :src="avar_shou" alt=""  class="show_img" v-show="avar_shou !== null"> 
            <div class="input_cssY" >
            <img src="../../static/images/shenfen.png" alt="" style="width:113px;height:27px" v-show="avar_shou == null"> 
            </div> 
            </div>

             
             <div class="submit-btn-1" @click="data_save">
              确&nbsp;定
            </div> 
        </div>

   </div>
     <myAddress v-if='show_select_address' @listen_to_child_event="get_colose"  class="my_address">
    </myAddress>


     <!--点击要上传图片的input -->
        <!-- 1.上传身份证正面的input -->
        <input type="file" class="hide file" accept="image/*" @change="upload_img">
        <!-- 2.上传身份证背面的input -->
        <input type="file" class="hide pick_f" accept="image/*" @change="upload_pick_img">
        <!-- 3.上传手持身份证input -->
        <input type="file" class="hide pick_bus" accept="image/*" @change="upload_shou_img">
    </div>


    
</template>
<script>
import myAddress from '../asset/dizhi/dizhi.vue';
import axios from 'axios'
export default {
     created(){
      
   
     }, 
     mounted() {
       
        },
    data(){
        return{
         avatar:null, //显示身份证正面的照片
         avar_fan:null,//显示身份证背面照片
         avar_shou:null, //手持身份证
         
         show_select_address: false,
         show_out:false,
         real_name:null,//真实姓名
         card_num:null,//证件号
         select_sex:1,//性别
         nation:null, //民族
         area_address: null, //地址
        
        
        }
    },
    methods:{ 
          // 加token
       
         open_address() {
                this.show_select_address = true;
            },
            cancel_address() {
                this.show_select_address = false;
            },
            return_address(a) {
                this.area_address = a;
                this.cancel_address();
            },
            get_colose(data){
               this.show_select_address =false;
            },

      // 处理上传图片逻辑
        //上传图片 
         trigger_file() {
                // 获取input，添加点击事件
                const file = document.querySelector(".file");
                file.click();
            },
             // input发生改变，调用图片的上传
            upload_img(e) {
                let formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('type', 'test');
                // 发送异步请求，把formData发送异步请求
                this.util.ajax.post("/admin/authCopyright/upload.do", formData).then(e => {   
                    //  返回的参数
                    this.avatar=e.path
                }).catch()
            },
            // 身份证背面上传
            pick_file(){
              // 获取input，添加点击事件
                const file = document.querySelector(".pick_f");
                file.click();
            }, 
            upload_pick_img(e) {
                let formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('type', 'test');
                // 发送异步请求，把formData发送异步请求
                this.util.ajax.post("/admin/authCopyright/upload.do", formData).then(e => {
                    //  返回的参数
                    this.avar_fan =e.path
                }).catch()
            },
             // 手持身份证
            pick_file_shou(){
              // 获取input，添加点击事件
                const file = document.querySelector(".pick_bus");
                file.click();
            }, 
            upload_shou_img(e) {
                let formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('type', 'test');
                // 发送异步请求，把formData发送异步请求
                this.util.ajax.post("/admin/authCopyright/upload.do", formData).then(e => {
                    //  返回的参数

                    this.avar_shou =e.path
                }).catch()
            },

              sex(state){
                   this.select_sex = state;
              },

            // 以上判断上传图片的路径  


            // 以下是发送请求保存数据
              data_save(){
                  
                 let realname = this.real_name;
                 let id_card = this.card_num;
                 let sex = this.select_sex;
                 let  nation = this.nation;
                 let address = this.area_address;
                 let  idcard_front = this.avatar;
                 let idcard_back = this.avar_fan;
                 let idcard_hander= this.avar_shou;
                 let status = 0
               
                
                 //身份证验证
                 let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/   
                 if(realname == null){
                  this.Toast('输入真实姓名')
                  return false
                 }else if(!regIdNo.test(id_card) || id_card == null){
                   this.Toast('输入证件号')
                    return false;
                 }else if(nation == null){
                  this.Toast('输入民族')
                  return false
                 }else if(address == null){
                  this.Toast('输入地址')
                  return false
                 }else{
                 let _p={
                     realname,
                     id_card,
                     sex,
                     nation,
                     address,
                     idcard_front,
                     idcard_back,
                     idcard_hander, 
                     status         
                   } 
                  
                  this.util.ajax.post('/admin/sysUserReal/save.do',_p).then(e=>{
                    
                       if(e.code == 200){ 
                          this.$router.push('/ban_copy')
                       }else {
                           this.Toast(e.data)
                       } 

                   }) 


                 }
              }
              


        
    },
     components: {
            myAddress: myAddress
        },


    
}
</script>
<style lang="less">
 @import 'real.less';
</style>


