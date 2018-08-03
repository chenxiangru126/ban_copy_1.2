<template>
    <div class="entry_b">
        <p class="entry_ts" style="color:#982A3E ">带"*"为必填项目</p>
        <!-- 这里是选择的地址 -->
        <div class="thickness" v-show="isthickness">
            <p class="thickness_name">所在地点<img @click="cl_img" src="../../static/images/guanbi.png"/> </p>
            <!-- 这里是显示的标头 -->
            <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''" @click="clickfl(1)">{{flname}}</span>
                <span :class=" choose_co ?'':'th_xz'" @click="clickfl(2)">省份</span>
            </p>
            <!-- 这里是遍历的显示的数据 -->
            <div class="thickness_m">
             <p v-for="(item, index ) in listType" :key="index" @click="click_in(index)">{{item.name}}</p>
          
            </div>
        </div>
        <!-- 发表地址 -->
         <div class="thickness" v-show="isthickness_two">
            <p class="thickness_name">所在地点<img @click="cl_img_1_two" src="../../static/images/guanbi.png"/> </p>
            <!-- 这里是显示的标头 -->
            <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''" @click="clickf2(1)">{{flname_two}}</span>
                <span :class=" choose_co ?'':'th_xz'" @click="clickf2(2)">省份</span>
            </p>
            <!-- 这里是遍历的显示的数据 -->
            <div class="thickness_m">
             <p v-for="(item, index ) in listType_two" :key="index" @click="click_in_two(index)">{{item.name}}</p>
          
            </div>
        </div>

        <!-- 这里是发表的弹出层 -->
          <div class="thickness" v-show="isshowstate">
          <p class="thickness_name">发表状态<img @click="cl_img2" src="../../static/images/guanbi.png"/> </p>
          <!-- 这里是发表状态的标题 -->
          <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''">{{flstate}}</span>
            </p>
            <!-- 这里是发表状态的内容 -->
            <div class="thickness_m">
             <p v-for="(item, index ) in listState" :key="index" @click="click_in_state(index)">{{item.name}}</p>  
            </div>
          </div>

         <!-- 这里是版权取得方式弹出层-->
         <div class="thickness" v-show="isshowban">
          <p class="thickness_name">版权取得方式<img @click="cl_img3" src="../../static/images/guanbi.png"/> </p>
          <!-- 这里是发表状态的标题 -->
          <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''">{{fl_ban}}</span>
            </p>
            <!-- 这里是发表状态的内容 -->
            <div class="thickness_m">
             <p v-for="(item, index ) in listBan" :key="index" @click="click_in_ban(index)">{{item.name}}</p>  
            </div>
          </div>
          <!-- 权利归属方式 -->
            <div class="thickness" v-show="isshowgui">
          <p class="thickness_name">版权取得方式<img @click="cl_img_4" src="../../static/images/guanbi.png"/> </p>
          <!-- 这里是发表状态的标题 -->
          <p class="thickness_fl">
                <span :class=" choose_co ?'th_xz':''">{{fl_gui}}</span>
            </p>
            <!-- 这里是发表状态的内容 -->
            <div class="thickness_m">
             <p v-for="(item, index ) in listgui" :key="index" @click="click_in_gui(index)">{{item.name}}</p>  
            </div>
          </div>



        <div class="entry_m">
            <div class="goods_i">
                <div class="text_div"><span class="flex flex-a-c">作品名称<i style="color:#982A3E ;margin-left:5px">*</i></span><span>{{art_name}}</span></div>
                <div class="text_div">
                    <span span class="flex flex-a-c">申请方式<i style="color:#982A3E;margin-left:5px ">*</i></span>
                    <span class="input">
                    <span style=" font-size: .666667rem;color: #9E9E9E ;">由著作权人申请</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>
                </div>
                <div class="text_div">
                <span class="flex flex-a-c">创作完成时间<i style="color:#982A3E ;margin-left:5px">*</i></span>
                <span class="input" @click="openPicker" style="color:#000" @click.native="open('picker')" size="large">
                    <span style=" font-size: .666667rem;color: #9E9E9E ;">{{creat_data}}</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>
                </div>
                <div class="text_div">
                    <span class="flex flex-a-c" style="display: inline-block; width: 7.066667rem;">创作完成地点<i style="color:#982A3E;">*</i></span>
                    <!-- 在这里可以判断是不是其他要加入输入框 -->
                  <div class="choose" @click="goodsfl" v-show="goodt_n !='其他'">{{goodt_n}}</div>
                  <div v-show="goodt_n =='其他'" class="other_text" style="display: flex; align-items:center "><a  class="choose" @click="goodsfl" >{{goodt_n}}</a><input type="text" class="_input_text"></div>
                
                </div>
                <div class="text_div">
                    <span class="flex flex-a-c">作品发表状态<i style="color:#982A3E;margin-left:5px ">*</i></span>
                      <span class="input" @click="text" >
                    <span style=" font-size: .666667rem;color: #9E9E9E ;" >{{state_name}}</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>

                </div>
                 <div class="text_div " v-show="state_name == '未发表'?false:true">
                <span class="flex flex-a-c">发表时间<i style="color:#982A3E;margin-left:5px ">*</i></span>
                <span class="input" @click="openPicker_two" style="color:#000" @click.native="open('picker_two')" size="large">
                    <span style=" font-size: .666667rem;color: #9E9E9E ;">{{creat_data_two}}</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>
                </div> 
                <div class="text_div " v-show="state_name == '未发表'?false:true">
                   <span class="flex flex-a-c">发表地点<i style="color:#982A3E;margin-left:5px ">*</i></span>
                    <!-- 在这里可以判断是不是其他要加入输入框 -->
                  <div class="choose" @click="goodsfl_two" v-show="goodt_n_two !='其他'">{{goodt_n_two}}</div>
                 <div v-show="goodt_n_two =='其他'" class="other_text" style="display: flex; align-items:center "><a  class="choose" @click="goodsfl_two" >{{goodt_n_two}}</a><input type="text" class="_input_text"></div>
                
                </div>
                 <div class="text_div">
                    <span class="flex flex-a-c">权利取得方式<i style="color:#982A3E ;margin-left:5px">*</i></span>
                    <span class="input" @click="get_ban">
                    <span style=" font-size: .666667rem;color: #9E9E9E ;">{{get_ban_name}}</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>
                </div>
                <div class="goods_m">
                <p>权利取得方式说明</p>
                <div class="tt_ss">
                <textarea v-model="ban_right" placeholder="请对权利取得方式进行说明"></textarea>
                <span class="tex_span">{{are}}/200</span>
                </div>
                </div>
               
                 <div class="text_div">
                    <span class="flex flex-a-c">权利归属方式<i style="color:#982A3E ;margin-left:5px">*</i></span>
                    <span class="input" @click="get_gui">
                    <span style=" font-size: .666667rem;color: #9E9E9E ;">{{gui_ban_name}}</span>
                     <span class="go_bottom bottom-1"></span>
                    </span>
                </div>
                <div class="goods_m">
                <p>权利归属方式说明</p>
                <div class="tt_ss">
                <textarea v-model="ban_gui" placeholder="请对权利归属方式进行说明"></textarea>
                <span class="tex_span">{{are}}/200</span>
                </div>
                </div>
                <div style="min-height: 3.9875rem;display: block;" class="text_div">
                    <p>权利拥有状况</p>
                    <div class="check_text">
                    <label for=""  v-for="(item,index) in list_check " :key="index" class="xuan" >
                      
                        <input type="checkbox" class="__input" checked  :id="xuanze(index)">{{item.name}}</label>
                  </div>  
                </div>
              <div class="goods_m">
              <p>权利拥有状况说明</p>
              <div class="tt_ss">
                <textarea v-model="ban_yong" placeholder="请对权利拥有状况说明，字说200字以内"></textarea>
                 <span class="tex_span">{{are}}/200</span>
             </div>
            </div>
              <div class="goods_m">
              <p class="flex flex-a-c">创作意图<i style="color:#982A3E;margin-left:5px ">*</i></p>
              <div class="tt_ss">
                <textarea v-model="ban_yi" placeholder="请填写创作意图，字数500字以内"></textarea>
                 <span class="tex_span">{{are}}/500</span>
             </div>
            </div>
            <div class="goods_m">
              <p class="flex flex-a-c">作品独创性<i style="color:#982A3E ;margin-left:5px">*</i></p>
              <div class="tt_ss">
                <textarea v-model="ban_zuo" placeholder="请填写作品独创性，字数500字以内"></textarea>
                 <span class="tex_span">{{are}}/500</span>
             </div>
            </div>
            </div>       
       
        </div>
        
        <div class="but"  @click="go_next">
            <span >确定</span>
        </div>
        <!-- 创作完成时间 -->
        <mt-datetime-picker class="picker_show"
                            ref="picker"
                            type="date"
                            v-model="value"
                            :startDate = "startDate"
                            @confirm="handleConfirm"
                            :endDate = "endDate" >
        </mt-datetime-picker>
        <!-- 发表时间 -->
        <mt-datetime-picker class="picker_show"
                            ref="picker_two"
                            type="date"
                            v-model="value"
                            :startDate = "startDate"
                            @confirm="handleConfirm_two"
                            :endDate = "endDate" >
        </mt-datetime-picker>  
    </div>
</template>

<style  lang="less" >
    @import 'data_center.less';
</style>

<script>
import Vue from 'vue';
import 'mint-ui/lib/style.css';
import util from "../../libs/util";
import {format, trim } from '../../libs/tools';
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
    export default {
          mounted(){
             let number = this.$route.query.number
             
             let  name = this.$route.query.name
             let url  = this.$route.query.url
             this.url = url
             this.art_name = name
             this.number = number
            

            this.util.ajax.get('/admin/authCopyright/getDicList.do').then(e=>{
                 let list =e.data.a2.result
                  this.listBan = list
                 let list_two = e.data.a3.result
                  this.listgui = list_two
                  let list_three = e.data.a4.result
                   this.list_check = list_three

            })
       
        },
        data() {
            return {
               value: new Date(),          //定义显示时间
               visible: false,
               startDate:  new Date('1900-01-01'),      //设置开始时间
               endDate: new Date(),  //设置结束时间
               creat_data:null,
            //  以上是控制选择创始时间
            // 创作发表时间
               creat_data_two:null,
             

            //  以下是发表状态
                state_name:null,
                isshowstate:false,
                flstate:'请选择',
                listState:[],
            
            // 版权取得方式
               isshowban:false,
               get_ban_name:null,
               fl_ban:'请选择',
               listBan:[],
            //权利归属方式
               isshowgui:false,
               gui_ban_name:null,
               fl_gui:'请选择',
               listgui:[],
                 
            // 发表地址
               isthickness_two:false,
               flname_two:'国家',
               listType_two:[],
               goodt_n_two:'选择地址',


               items: [],
               goodsNum:'',
               isbjg:true,
               isthickness:false,
               choose_co:true,
               goodsType:[],
               listType:[],
               goodt_n:'选择地址',
               flname:"国家",
               tagList:[],
               lab0:false,
               lab1:false,
               lab2:false,
               lab3:false,
               goodsName:'',
               price:'',
               copyright_num:'',
               tag:[],
             
               goodsDescribe:'',
               count:1,
               categories:'',
               smallclass:'',
               are:0,

               ban_right:null, //权利取得说明
               ban_gui:null,//权利归属说明
               ban_yong:null,//权利状况拥有说明
               ban_yi:null,//创作意图
               ban_zuo:null,//作品的创性
               art_name:null,//作品名称

               list_check:[], //权利拥有状况

            
               number:null,
               url:null,//缩略图显示路径
               id:null,
               id_gui:null,
            }
        },
        watch:{  
        
            ban_right(oldVal){  
                if(oldVal.length<400){
                    this.ban_right = this.ban_right.slice(0,400);
                    this.are = 400;
                }
                this.are = oldVal.length;
　　　　　　　　},
            ban_gui(oldVal){  
                if(oldVal.length<400){
                    this.ban_gui = this.ban_gui.slice(0,400);
                    this.are = 400;
                }
                this.are = oldVal.length;
　　　　　　　　},
           ban_yong(oldVal){  
                if(oldVal.length<400){
                    this.ban_yong = this.ban_yong.slice(0,400);
                    this.are = 400;
                }
                this.are = oldVal.length;
　　　　　　　　},
          ban_yi(oldVal){  
                if(oldVal.length<400){
                    this.ban_yi = this.ban_yi.slice(0,400);
                    this.are = 400;
                }
                this.are = oldVal.length;
　　　　　　　　},
          ban_zuo(oldVal){  
                if(oldVal.length<400){
                    this.ban_zuo = this.ban_zuo.slice(0,400);
                    this.are = 400;
                }
                this.are = oldVal.length;
　　　　　　　　}
　　　　　}, 
        created() {
            this.initData();
        },
      

        methods: {
        openPicker() {
        this.$refs.picker.open();
          },
        handleConfirm(data){
        //   let time=this.util.format(data,'yyyy-MM-dd')
           this.time_ge(data)

          },

        time_ge(data){
            this.creat_data =format(data,'yyyy-MM-dd')
        },

        //   以上是选择创始时间
           openPicker_two(){
             this.$refs.picker_two.open(); 

          },
          handleConfirm_two(data){
            this.time_two(data)

          },
          time_two(data){
            this.creat_data_two =format(data,'yyyy-MM-dd')
          },  
            // 以上是发表时间

        initData(){
          /*   this.util.ajax.post('/admin/authCopyright/getDicList.do').then(e=>{
             


            }) */
        },
        goodsfl(){
            // 这里是选择地址
            this.isthickness = true;
            this.flname = "国家";
            this.choose_co = true;                       
         let  info = [
            {id: 1, name: '中国',  list: [
                {id: 1, name: '北京市'},
                {id: 2, name: '天津市'},
                {id: 3, name: '上海市'},
                {id: 4, name: '重庆市'},
                {id: 5, name: '河北省'},
                {id: 6, name: '山西省'},
                {id: 7, name: '辽宁省'},
                {id: 8, name: '吉林省'},
                {id: 9, name: '黑龙江省'},
                {id: 10, name: '江苏省'},
                {id: 11, name: '浙江省'},
                {id: 12, name: '安徽省'},
                {id: 13, name: '福建省'},
                {id: 14, name: '江西省'},
                {id: 15, name: '山东省'},
                {id: 16, name: '河南省'},
                {id: 17, name: '湖北省'},
                {id: 18, name: '湖南省'},
                {id: 19, name: '广东省'},
                {id: 20, name: '海南省'},
                {id: 21, name: '四川省'},
                {id: 22, name: '贵州省'},
                {id: 23, name: '云南省'},
                {id: 24, name: '陕西省'},
                {id: 25, name: '甘肃省'},
                {id: 26, name: '青海省'},
                {id: 27, name: '台湾省'},
                {id: 28, name: '内蒙古自治区'},
                {id: 29, name: '广西壮族自治区'},
                {id: 30, name: '西藏自治区'},
                {id: 31, name: '宁夏回族自治区'},
                {id: 32, name: '新疆维吾尔族自治区'},
                {id: 33, name: '香港特别行政区'},
                {id: 34, name: '澳门特别行政区'},             
            ]},
            {id:2, name:'其他'}] 
        this.goodsType =info;
        this.listType = this.goodsType;             
        },
        clickfl(e){
            if(e==1){
                this.choose_co = true;
            }else{
                this.choose_co = false;
            }
        },
        click_in(e){
            if(e==1&&this.choose_co){
              this.smallclass =  this.listType[e].id;
                this.goodt_n = '其他';
                this.isthickness = false;
            }
            if(this.choose_co){
                this.listType = this.goodsType[e].list;
                this.flname = this.goodsType[e].name;
                this.categories = this.goodsType[e].id;
                this.choose_co = false;
            }else{
                this.smallclass =  this.listType[e].id;
                this.goodt_n = this.flname+'--'+this.listType[e].name;
                this.isthickness = false;
               
            }
        },
        cl_img(){
            this.isthickness = false;
        }, 
       
        //以上是选择地址

         goodsfl_two(){
            // 这里是选择地址
            this.isthickness_two = true;
            //滑动时避免底层滑动
           // $('html').attr('overflow','hidden')
            

             
            this.flname_two = "国家";
            this.choose_co = true;                       
         let  info = [
            {id: 1, name: '中国',  list: [
                {id: 1, name: '北京市'},
                {id: 2, name: '天津市'},
                {id: 3, name: '上海市'},
                {id: 4, name: '重庆市'},
                {id: 5, name: '河北省'},
                {id: 6, name: '山西省'},
                {id: 7, name: '辽宁省'},
                {id: 8, name: '吉林省'},
                {id: 9, name: '黑龙江省'},
                {id: 10, name: '江苏省'},
                {id: 11, name: '浙江省'},
                {id: 12, name: '安徽省'},
                {id: 13, name: '福建省'},
                {id: 14, name: '江西省'},
                {id: 15, name: '山东省'},
                {id: 16, name: '河南省'},
                {id: 17, name: '湖北省'},
                {id: 18, name: '湖南省'},
                {id: 19, name: '广东省'},
                {id: 20, name: '海南省'},
                {id: 21, name: '四川省'},
                {id: 22, name: '贵州省'},
                {id: 23, name: '云南省'},
                {id: 24, name: '陕西省'},
                {id: 25, name: '甘肃省'},
                {id: 26, name: '青海省'},
                {id: 27, name: '台湾省'},
                {id: 28, name: '内蒙古自治区'},
                {id: 29, name: '广西壮族自治区'},
                {id: 30, name: '西藏自治区'},
                {id: 31, name: '宁夏回族自治区'},
                {id: 32, name: '新疆维吾尔族自治区'},
                {id: 33, name: '香港特别行政区'},
                {id: 34, name: '澳门特别行政区'},             
            ]},
            {id:2, name:'其他'}] 
        this.goodsType =info;
        this.listType_two = this.goodsType;             
        },
        clickf2(e){
           if(e==1){
                this.choose_co = true;
            }else{
                this.choose_co = false;
            }
        },
        cl_img_1_two(){
            this.isthickness_two = false;
        },
        click_in_two(e){
            if(e==1&&this.choose_co){
              this.smallclass =  this.listType_two[e].id;
                this.goodt_n_two = '其他';
                this.isthickness_two = false;
            }
            if(this.choose_co){
                this.listType_two = this.goodsType[e].list;
                this.flname_two = this.goodsType[e].name;
                this.categories = this.goodsType[e].id;
                this.choose_co = false;
            }else{
                this.smallclass =  this.listType_two[e].id;
                this.goodt_n_two = this.flname_two+'--'+this.listType_two[e].name;
                this.isthickness_two = false;
               
            }
        },


        // 以下是发表状态弹出层
           cl_img2(){
               this.isshowstate = false
           },
           text(){
              this.isshowstate = true;
              this.flstate = '请选择';
              this.choose_co = true;
              let  state_list =[
                  {id: 1, name: '已发表'},
                  {id:2,name:'未发表'}
              ];
              this.listState = state_list;
           },
           click_in_state(e){
            //  选择的index获取name在显示
              let list = this.listState;
             this.state_name =list[e].name;
              this.isshowstate = false;

           },

        //以下是版权取得方式
        cl_img3(){
            this.isshowban = false;

        },
        get_ban(){
            this.isshowban = true;
            

        },
        click_in_ban(e){
            let list = this.listBan;
            this.get_ban_name=list[e].name
            this.id = list[e].id
            this.isshowban = false;
        },
        // 版权归属方式
         cl_img_4(){
            this.isshowgui = false;

        },
        get_gui(){
            this.isshowgui = true;   

        },
        click_in_gui(e){
            let list = this.listgui;
            this.gui_ban_name=list[e].name
            this.id_gui = list[e].id
            this.isshowgui = false;
        },

        // 以下是权利拥有状况  
        cl_tag(e,id){
                if (e.target.className.indexOf("labelbj") == -1) {
                    e.target.className = "label labelbj"; //切换按钮样式
                    this.tag.push(id);
                } else {
                    e.target.className = "label";//切换按钮样式
                    var index = this.tag.indexOf(id);
                    this.tag.splice(index, 1);
                }             
        },
        // 选择权利拥有状况
            xuanze(index){
                return 'check_'+index

            },
        // 资料提交
         go_next(){
            //  在提交请求处进行checked判断
               
                let arr ='';
                let arr_name ='';
                 $('.__input').each(function(){
                    if($(this).is(':checked')){
                         let id = $(this).attr('id')
                         let str =id.split('_')
                         let zhi =  parseInt(str[1])+1
                         let text = $(this).parent().text()
                         
                         arr+=zhi+','
                         arr_name+= text+','
                    }
                 });
              
             let aut_hold = arr
             let aut_hold_name = arr_name
             let pro_name = this.art_name;
            //  let pro_name = '春回大地';
             let  creat_date = this.creat_data;
             let creat_place =  this.goodt_n;
             let published_status_name = this.state_name;
             let  published_time = this.creat_data_two;
             let published_place = this.goodt_n_two;
             let aut_acp_method_name = this.get_ban_name;
             let aut_acp_method_exe =this.ban_right;
             let  aut_acp_method= this.id_gui
             let  aut_bel_method_name  = this.gui_ban_name;
             let aut_bel_method_exp =this.ban_gui ; 
             let aut_bel_method_id = this.id
             let aut_hold_exp = this.ban_yong;
             let create_intention = this.ban_yi;
             let pro_original = this.ban_zuo;
             let number = this.number;
             let url = this.url           
             if(published_status_name == '未发表'){
                   published_place = ''
                   published_time =''

                 }
            //以下是发送请求
              if(creat_date == null){
                 this.Toast('请选择创作完成时间')
                 return false
              }else if(creat_place == null){
                 this.Toast('请选择创作完成地点')
                 return false
              }else if(published_status_name == null){
                 this.Toast('请选择作品发表状态')
                  return false
              }else if(aut_acp_method == null){
                  this.Toast('请选择权利取得方式')
                  return false 

              }else if(aut_bel_method_name == null){
                   this.Toast('请选择权利归属方式')
                     return false
              }else if(create_intention == null){
                 this.Toast('请输入创作意图')
                     return false
              }else if(pro_original == null){
                 this.Toast('请输入作品独创性')
                 return false
              }else{
                   
                     let  _np = {
                   pro_name,
                   creat_date,
                   creat_place,
                   published_status_name,
                   published_time,
                   published_place,
                   aut_acp_method_name,
                   aut_acp_method_exe,
                   aut_bel_method_name,
                   aut_bel_method_exp,
                   aut_hold_exp,
                   create_intention,
                   pro_original,
                   aut_hold,
                   aut_hold_name,
                   number,
                   aut_bel_method_id,
                   aut_acp_method
                 }
                 let paramStr = JSON.stringify(_np);
                  let _p = {
                 paramStr:paramStr,
                 type:2
                } 
                   this.util.ajax.post('/admin/copyrightTemp/save.do',_p).then(e=>{
                   
                     if(e.code ==200){
                        this.$router.push('/pay_money?name='+pro_name+'&number='+number)
                     }else{
                        this.Toast('信息保存异常')
                     } 
                
              })
               

         }
     
      }
        }
    }
</script>

