<template>
    <div class="library_m">
        <!-- 一键导入，点击一键导入是选择的我的作品中的一种作品 -->
        <div class="akey" @click="akey">一键导入</div>
        <!-- 下面遍历的是从接口查到的所有的我的作品的列表展示 -->
       <div class="lib_list" @click="lib_on(it)" v-for="(it,index) in list" :key="index" >
           <!-- 显示我的作品的路径 -->
           <img v-bind:src="it.url"/>
           <!-- 是否选中 -->
           <div class="lib_n " :class="it.check?'lib-selected':'lib-unselected'"  @click.stop="choose(it,index)">
               <span>·{{it.name}}·</span>
           </div>
       </div>
    </div>
</template>

<style lang="less">
    @import 'library_into.less';
</style>

<script>
import util from "../../libs/util";
    export default {
        data() {
            return {
               list:[], //我的作品的列表
               currentPage:1,//当前的页数
               rid:999,  //显示的条数
            }
        },
        created() {
            this.initData();
           
        },
        mounted() {
            var that = this;
        },
        methods: {
            /* initDtata():是获取页数为一的=展现的从我的作品查询的作品的缩略图的list，然后返回给data的list数组 */
           initData() {
               let data = {
                //  每页显示20个作品
                   showCount:20,
                // 获取当前page页面
                   currentPage:this.currentPage
               }
              this.util.ajax.post("/mall/auth_production/getProductData.do",data).then(e=>{
                    // 获取我的作品的缩略图
                    //从数据库获取了我的作品的列表，并且初始化是没有被选中
                    for(let i in e.data.list){e.data.list[i].check = false;}
                    // 这里的意思是把数据库返回的数组添加到list中
                    this.list = this.list.concat(e.data.list);
                }).catch()
            },
            lib_on(a){
                // 点击的缩略图，跳转到当前用户的选中的缩略的9张详细的展示页
                var  url = this.$route.query.url_list
                if(url){
                     this.$router.push({path: '/my_work',query:{ id:a.id,url}}); 
                }else{
                    this.$router.push({path: '/my_work',query:{ id:a.id}}); 
                }
 
                
            },
            akey(){
                // 这里是从app导入的作品，这个页面是当前登录的这个人的作品
                if(this.rid==999){
                    this.Toast('请选择导入资源');
                    return  false;
                }
                   let id = this.list[this.rid].id;
                // 把作品的id带过去直接到
                this.util.ajax.post("/mall/auth_production/getProductImg.do",{productionId:id}).then(e=>{
                
                    // 获取的是我的作品的9张图片
                   let li =  e.data.list.length;      
                    let num = this.$route.query.num      
                   
                        // 得到对象
                   let  url= this.$route.query.url_list
                   let  url_list = JSON.parse(url)
                      console.log(url_list)
                   let  ls = Object.getOwnPropertyNames(url_list).length
                    if(ls == 0){
                        url_list.one=e.data.list[0];
                        url_list.two=e.data.list[1];
                        url_list.three=e.data.list[2];
                        url_list.four=e.data.list[3];
                    }else if(ls == 1){
                         url_list.two=e.data.list[0];
                        url_list.three=e.data.list[1];
                        url_list.four=e.data.list[2];
                    }else if(ls == 2){
                         url_list.three=e.data.list[0];
                        url_list.four=e.data.list[1];
                    }else if(ls == 3){
                           url_list.four=e.data.list[0];
                    }
                      // 获得的url_list直接转化为json字符串，返回给upload_img.vue
                     let url_back = JSON.stringify(url_list)
                    
                    //返回到upload_img.vue的页面
                        this.$router.push('/ban_copy?url='+url_back)
                    
                           
                }).catch()
            },
            choose(a,b){
                a.check = !a.check;
                if(this.rid!=999){
                    this.list[this.rid].check = false;
                }
                if(this.rid==b){
                    this.rid = 999;
                }else{
                     this.rid = b;
                }
               
            }
        }
    }
</script>


