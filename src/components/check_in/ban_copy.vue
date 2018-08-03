<template>
<div>
    <!--作品分类类型 -->
    <div class="thickness" v-show="isthickness">
            <p class="thickness_name">专业分类<img @click="cl_img" src="../../static/images/guanbi.png"/> </p>
            <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''" @click="clickfl(1)">{{flname}}</span>
                <span :class=" choose_co ?'':'th_xz'" @click="clickfl(2)">请选择</span>
            </p>
            <div class="thickness_m">
             <p v-for="(item, index ) in listType" :key="index" @click="click_in(index)">{{item.name}}</p>
          
            </div>
        </div>

    <!-- 以上是作品类型分类 -->

<div class="ban_copy ban_detail">
    <v-touch v-on:swiperight="onSwiperRight" id="swiper_id">
        <span class="icon_img_1" @click="get_swiper" >
        <img src="../../static/images/img_info.png" alt="">
         </span>
      </v-touch> 
     
    
    
   <div class="ban_content_1">
         <div class="other">
        <label for="name">作品名称 :&nbsp;<input type="text" id="name" style=" height: 17px; width:125px;margin-top:.6rem" placeholder="填写" v-model="art_name" ></label>
       <div >作品编码 :&nbsp;<span style=" height: 1.266667rem; width: 10rem;margin-top:.6rem"></span></div>

         <div class="flex-h flex-a-c " style="margin-top:19px; ">   
        <div class="flex-h flex-a-c ">创作性质:&nbsp;  原创</div>
        <div class="flex-h flex-a-c " style="margin-left:50px">作品分类 :&nbsp; 美术</div>
        </div>
         <div class="flex-h flex-a-c " style=" justify-content: space-between">   
        <div class="flex-h flex-a-c "  > 
          <label for="name_name">存证者 : &nbsp;<input type="text" style=" height: 17px; width:53px;margin-top:.6rem" placeholder="填写" v-model="art_person" id="name_name">
          </label>
          <div style="margin-left:28px;">存证时间 : &nbsp;<span style=" height: 17px; width: 53px;margin-top:.6rem"></span></div>
          </div>
       
        </div>    
             <div  style="margin-top:11px;">
             <p >作品描述</p> 
             <div class="detail_zuo">
                  <div class="w flex-h b-b m-t flex-a-c lei_class_div"  style="margin:2px 0 0 8px;z-index:999" >
                 <div >专业分类 ：&nbsp;</div>
                <div class="lei_class bottom-1" @click='goodsfl'>
                    <p class=" c2 " v-if='goodt_n' style="width: 6rem;" >{{goodt_n}}</p>
                    <p class=" c2 " v-else style="width:6rem;">请选择</p>
                </div>
                 
            </div >
            <span  class="text" id="text_text">填写（120字以内）</span>
             <textarea name="" style="text-indent:10rem; height:98px; padding:0;color:#000;background:#F1EFEB" @click="text_change" v-model="art_text">
  
             </textarea>
             </div>    

             </div>
           

      </div>

    </div>  
   <!-- 以下代码是传图片的 -->
       <div class="top">
        <v-touch v-on:swiperight="onSwiperRight_img" id="swiper_id_img">
        <span class="icon_img_2" @click="get_swiper_img" >
        <img src="../../static/images/upload_img_1.png" alt="">
         </span>
      </v-touch> 
     
      <div class="upload_img">
        <!-- 主图和附图 -->
        
         <div class="upload_master " style="border-bottom: .0625rem solid #BFBFBF;border-right: .0625rem solid #BFBFBF;" @click="show_list(null,'one')">
         <div class="no_img" v-show="!url_list.one">
         <img src="../../static/images/add_img.png" alt="">
         </div>
         <div class="has_img" v-show="url_list.one">
            <img :src="url_list.one" alt="" id="img_one"> 
         </div>
         </div>
         <div class="upload_branch">
          <div class="upload_img_two item" style="border-bottom: .0625rem solid #BFBFBF;" @click="show_img(null,'two')">
         <div class="no_img" v-show="!url_list.two">
         <img src="../../static/images/add_img.png" alt="">
         </div>
          <div class="has_img" v-show="url_list.two">
            <img :src="url_list.two" alt="" id="img_two"> 
         </div>
         </div>
          <div class="upload_img_three item" style="border-right: .0625rem solid #BFBFBF;" @click="show_img_two(null,'three')">
         <div class="no_img"  v-show="!url_list.three">
         <img src="../../static/images/add_img.png" alt="">
         </div>
          <div class="has_img" v-show="url_list.three">
            <img :src="url_list.three" alt="" id="img_three"> 
         </div>
         </div>
             <div class="upload_img_four item" @click="show_img_three(null,'four')">
         <div class="no_img" v-show="!url_list.four">
         <img src="../../static/images/add_img.png" alt="">
         </div>
          <div class="has_img" v-show="url_list.four">
            <img :src="url_list.four" alt="" id="img_four"> 
         </div>
         </div>
    </div>
       

    </div> 

    </div> 
      
  </div>   
 
   <div class="agree t-c c1">
       <div>
       <label for="classify"><input type="checkbox" id="classify" class="__input" style="margin-right:14px"> </label>
       <span>已阅读同意</span>
        <span style="font-size:14px;color:#4A8ADA" @click="go_user_polo">《版权协议》</span>
            <div class="submit-btn-1" style="margin: 11px auto 0" @click="art_btn">
               上传认证
            </div>
            </div>
    </div> 
    <!-- 点击upload上传作品 -->
        <upload v-if="show_select_upload" @close_upload ="close"></upload>
         <!-- 切换子路由 -->
         <router-view class="child_view"></router-view>  
   
</div>
 
     
</template>

<script>

import upload from '../asset/upload/upload.vue';
import util from '../../libs/util'

export default {
     mounted(){
        let url_list = this.$route.query.url;
        let num = this.$route.query.num;
        if(num){
            let url = this.$route.query.url
            this.url_list.five = url
        }
           url_list =JSON.parse(url_list)
           this.url_list = url_list  
      },
      data(){
        return{
         area_address: null,
         show_select_address: false,
         show_out:false,
         show_select_upload:false, //上传作品默认是隐藏的 
         url_list:{}, //存放图片路径的对象，存证的路径
         num:null, 
        //作品分类
         isthickness:false,
         flname:"一级分类", 
         listType:[], //作品分类列表
          goodsType:[],
         goodt_n:null, //专业类型
         choose_co:false, //默认

        // 储存的信息
         art_name:null, // 存证作品名
         art_person:null, //存证者
         art_text:null,// 存证的描述

      
        
        }
    },
     components: {
           
            upload:upload
        },
        created(){
              var that = this
        },
    methods:{
          
             show_list(img_url,num){   
                this.num = num;
                this.show_select_upload = true; 
                if(num == null){
                  this.show_select_upload = false; 
                //存放到对象
                   this.url_list.one = img_url   

                }                 
            },
            show_img(img_url,num){
                this.num = num;
                this.show_select_upload = true; 
                 if(num == null){
                  this.show_select_upload = false; 
                   //存放到对象中
                   this.url_list.two = img_url;       
                } 
               
            },
            show_img_two(img_url,num){
                this.num = num;
                this.show_select_upload = true; 
                 if(num == null){
                  this.show_select_upload = false; 
                    //存放到对象中
                   this.url_list.three = img_url        
                }  
               
            },
            show_img_three(img_url,num){
                this.num = num;
                this.show_select_upload = true; 
                if(num == null){
                  this.show_select_upload = false; 
                     //存放到对象中
                   this.url_list.four = img_url    
                }          
            },
            show_img_four(img_url,num){
              this.num = num;
                this.show_select_upload = true; 
                if(num == null){
                  this.show_select_upload = false; 
                     //存放到对象中
                   this.url_list.five = img_url      
                }          
            },
            close(){
               this.show_select_upload =false;
            },
            // 滑动的操作
              onSwiperRight(){
                //2.实现向右滑动  
                $("#swiper_id>span").animate({
                    right:"-6.466667rem"
                }, 800);
            },
            // 点击滑动
            get_swiper(){
                // 1.点击实现向右滑动
                $('#swiper_id>span').animate({
                    right:"-6.466667rem"
                }, 800);
            },

            // 图片滑动条
              onSwiperRight_img(){
                //2.实现向右滑动  
                $("#swiper_id_img>span").animate({
                    right:"-6.466667rem"
                }, 800);
            },
            // 点击滑动
            get_swiper_img(){
                // 1.点击实现向右滑动
                $('#swiper_id_img>span').animate({
                    right:"-6.466667rem"
                }, 800);
            },
            // 打开作品分类弹出层
             clickfl(e){
            if(e==1){
                this.choose_co = true;
            }else{
                this.choose_co = false;
            }
          },
           click_in(e){
            if(this.choose_co){
                this.listType = this.goodsType[e].list;
                this.flname = this.goodsType[e].name;
                this.categories = this.goodsType[e].id;
                this.choose_co = false;
            }else{
                this.smallclass =  this.listType[e].id;
                this.goodt_n = this.listType[e].name;
                this.isthickness = false;
            }
        },
        cl_img(){
            this.isthickness = false;
        },
         goodsfl(){
            // 这里是选择地址
            this.isthickness = true;
            this.flname = "请选择";
            this.choose_co = true;                       
         let  info= [
             {id: 1, name: '艺术设计类', list: [
                {id: 1, name: '视觉传达'},
                {id: 2, name: '平面设计'},
                {id: 3, name: '环境设计'},
                {id: 4, name: '公共艺术'},
                {id: 5, name: '景观设计'},
                {id: 6, name: '建筑'},
                {id: 7, name: '产品设计'},
                {id: 8, name: '工业设计'},
                {id: 9, name: '家具设计'},
                {id: 10, name: '装饰艺术'},
                {id: 11, name: '服装与服饰'},
                {id: 12, name: '首饰设计'},
                {id: 13, name: '染织'},
                {id: 14, name: '陶瓷'},
                {id: 15, name: '工艺美术'},
                {id: 16, name: '多媒体'},
                {id: 17, name: '动画'},
                {id: 18, name: '数字媒体'},
                {id: 19, name: '摄影'},
                {id: 20, name: '实验艺术'},
                {id: 21, name: '文物鉴定与修复'},
                {id: 22, name: '艺术与技术'},

            ]},
             {id: 2, name: '造型艺术类', list: [
                {id: 19, name: '中国画'},
                {id: 20, name: '油画'},
                {id: 21, name: '版画'},
                {id: 22, name: '壁画'},
                {id: 23, name: '水彩'},
                {id: 24, name: '插画'},
                {id: 25, name: '漆画'},
                {id: 26, name: '雕塑'},
                {id: 27, name: '书法'},     
            ]}
      ]
        this.goodsType =info;
        this.listType = this.goodsType;             
        },
        text_change(){
            $('#text_text').hide()
        },
        //提交存证信息
           art_btn(){
               
           let name =  this.art_name
           let auth_name = this.art_person
           let type_name = this.goodt_n
           let production_note = this.art_text
           let url = this.url_list
           let url_str = '';
         
           if(url.one !=null){
               url_str +=url.one+",";
           }
           if(url.two !=null){
               url_str +=url.two+",";
           }
           if(url.three !=null){
               url_str +=url.three+",";
           }
           if(url.four !=null){
               url_str +=url.four+",";
           }
           url = url_str;
          //获取是否点击 阅读协议
            let result = $("#classify").is(":checked");
              
           if(name == null){
               this.Toast('请输入作品名称')
               return false
           }else if(auth_name == null ){
               this.Toast('请输入存证者')
               return false
           }else if(type_name == null){
             this.Toast('请选择专业类型')
             return false 

           }else if(production_note == null){
             this.Toast('请输入作品描述')
             return false
           }else if(!result){
             this.Toast('请阅读用户协议')
             return false
           }else{
               
            // 提交存证数据
             let _p ={
              name,
              auth_name,
              type_name,
              production_note,
              url,
              
             }
             let paramStr = JSON.stringify(_p); 
             let _np = {
                 paramStr:paramStr,
                 type:1
             }
             this.util.ajax.post('/admin/copyrightTemp/save.do',_np).then(e=>{  
                     if(e.code ==200){
                        this.$router.push('/secret?number='+name)
                     }
              })
              
           }            
           },
           go_user_polo(){
                 this.$router.push('polo')
           }
            }
}
</script>
<style lang="less">
  @import 'ban_copy.less';

</style>


