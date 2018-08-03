<template>
<div class="upload" v-show="!showChose">
   <div class="showChose" >
      <div class="dialog_rgba_bg"></div>
    <transition name="move">  
      <section class="address">
     <div class="flex-h flex-j-a flex-a-c">
      <div class="flex-v flex-a-c" @click="photo_img">
          <img src="../../../static/images/poto_icon.png" alt="">
           <span>相机</span>
      </div>
       <div class="flex-v flex-a-c" @click="get_img">
          <img src="../../../static/images/img_icon.png" alt="">
           <span>相册</span>
      </div>
      <div class="flex-v flex-a-c" @click="get_work">
          <img src="../../../static/images/hui_icon.png" alt="">
           <span>作品</span>
      </div>
      </div >
       <img src="../../../static/images/bg-white1.png" alt="" width="100%" style="margin-top:38px">
       <div class="cancel_btn" style="margin-top:25px" @click="cancel_img">
            取消
       </div>
       </section>
      </transition>
   </div>
   <!-- 1.上传照相机的input -->
         <input type="file" class="hide file" accept="image/*" @change="upload_img">
         <!-- 2.上传图片的input -->
         <input type="file" class="hide pick_f" accept="image/*" @change="upload_pick_img">
</div>
    
</template>
<script>
export default {
  
    data(){
        return{
         showChose:false,//默认是不显示弹出层
         num:null,
         items:[], //存放图片路径的数组
        
        }
    },
    methods:{
     cancel_img(){
        // 这里要分发事件
        this.$emit('close_upload')
    },
    photo_img(){
     
     const file = document.querySelector(".file");
      file.click();   
    },
    upload_img(e) {
                var num = this.$parent.num;
                let formData = new FormData();
                formData.append('file', e.target.files[0]);
                formData.append('type', 'test');
                // 发送异步请求，把formData发送异步请求
                this.util.ajax.post("/admin/authCopyright/upload.do", formData).then(e => {
                   
                    //  返回的参数
                     if(num == 'one'){
                             debugger;
                         this.$parent.show_list(e.path);
             
                     }else if(num =='two'){
                       this.$parent.show_img(e.path);
          

                     }else if(num =='three'){
                       this.$parent.show_img_two(e.path);

                     }else if(num == 'four'){
                         this.$parent.show_img_three(e.path); 
         
                     }else if(num == 'five'){
                     this.$parent.show_img_four(e.path);  
                    }                
                                
                }).catch()
            },
   get_img(){
     // 获取input，添加点击事件
     const file = document.querySelector(".pick_f");
      file.click();     
   } ,
   upload_pick_img(e){ 
      
        var num = this.$parent.num;
        let formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('type', 'test');
        // 发送异步请求，把formData发送异步请求
        this.util.ajax.post("/admin/authCopyright/upload.do", formData).then(e => {
            //  返回的参数
            if(num == 'one'){
                this.$parent.show_list(e.path);

            }else if(num =='two'){
                this.$parent.show_img(e.path);

            }else if(num == 'three'){
                  this.$parent.show_img_two(e.path);

            }else if(num == 'four'){
                this.$parent.show_img_three(e.path);  
            }else if(num == 'five'){
               this.$parent.show_img_four(e.path);  
            }
            // this.avar_fan =e.data.urlShow
        }).catch()  
   },
   get_work(){  
         var num = this.$parent.num;
         console.log(num)
          var url_list = this.$parent.url_list
          var url = JSON.stringify(url_list)
         if(num == 'five'){
            this.$router.push('/library_into?num='+num)  
         }else{
            // 先得到对象作为参数传递给子级my_work.vue组件
       
          if(JSON.stringify(url) == "{}"){
            // 把url_list带到my_work.vue
           this.$router.push('/library_into')
          }else{
           // 把url_list带到my_work.vue
           this.$router.push('/library_into?url_list='+url)
          }    
         }
       
   }     
}
}
</script>
<style lang="less">
@import './upload.less';
</style>


