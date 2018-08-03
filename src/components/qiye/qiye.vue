<template>
   <div>
       <div class="qiye_real">
          <div class="input_b">
            <div class="w h3 line-h-3 flex-h b-b m-t">
                <div class="flex-1 c1 font-1 ">公司名称</div>
                <div class="flex-3">
                    <input type="text" placeholder="输入公司名称"  class="_input" v-model="com_name">
                </div>
            </div>
            
             <div class="w h3 line-h-3 flex-h b-b ">
                <div class="flex-1 c1 font-1 ">证件号码</div>
                <div class="flex-3">
                    <input type="text" placeholder="输入证件号"  class="_input"  v-model="card_num">
                </div>
            </div>
            <!-- 上传执照 -->
              <p class="c1 font-0  p-t"  style="color:#BABABA;box-sizing:border-box;margin: .325rem 0;">营业执照:</p>
            <div class="upload"  @click="trigger_file" style="height:22rem">
              <img :src="avatar" alt=""  class="show_img" v-show="avatar !== null"> 
              <div class="input_cssY">
              <img src="../../static/images/shenfen.png" alt=""  style="width:113px;height:27px" v-show="avatar == null">  
             </div>   
            </div> 

            </div>
             <div class="submit-btn-1" @click="get_real">
              确&nbsp;定
            </div> 
       </div>
       <!-- 上传营业执照 -->
       <input type="file" class="hide file" accept="image/*" @change="upload_img">
   </div>
    
</template>
<script>
 import util from '../../libs/util'
export default {
    data(){
    return{
      avatar:null,
      com_name:null,
      card_num:null,
    }

    },
    methods:{
        // 上传图片
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
            get_real(){
                
                 let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ 
                 debugger;
                 
                   let  realname = this.com_name
                   let  id_card = this.card_num
                   let  idcard_front = this.avatar
                   let   status = 1

                   if(realname == null){
                    this.Toast('请输入公司名称')
                    return false
                   }else if(!regIdNo.test(id_card)){
                       this.Toast('请输入证件号')
                       return false
                   }else{
                      let _p = {
                       realname,
                       id_card,
                       idcard_front,
                       status
                      }
                     this.util.ajax.get('/admin/sysUserReal/save.do?realname='+realname+'&id_card='+id_card+'&idcard_front='+idcard_front+'&status='+status,).then(e=>{
                       if(e.code == 200){
                            this.$router.push('/ban_copy')
                       }
                     })
                   }
            }
    }  
}
</script>
<style lang="less">
@import 'qiye.less';

</style>


