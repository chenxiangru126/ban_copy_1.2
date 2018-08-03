<template>
    <div class="work_m">
            <div class="work_l" >
                <div class="img_max" v-for="it in list_l" :key="it.id" @click="on_img(it)"><em v-if="it.check"></em> <span v-else></span><img v-bind:src="it.url"/></div>
                
            </div>
            <div class="work_r" >
                <div class="work_r_img" v-for="item in list_r" :key="item.id" @click="on_img(item)"><em v-if="item.check"></em> <span v-else></span><img v-bind:src="item.url" /></div> 
                
            </div>
        
        <div class="but" @click="import_img">
            <span>导入图片</span>
        </div>
    </div>
</template>

<style lang="less">
    @import 'my_work.less';
</style>

<script>
  import util from "../../libs/util";
    export default {
        data() {
            return {
              id:'',
              list_l:[],
              list_r:[],
              img:[]
            }
        },
       created() {
         this.id = 	this.$route.query.id;

         this.initData();
        },
        mounted() {
            var that = this;
        },
        methods: {
            initData(){
                util.ajax.post("/mall/auth_production/getProductImg.do",{productionId:this.id}).then(e=>{
                   this.list = e.data.list;
                   for(let i in e.data.list){
                       if(i%2==0){
                           this.list_l.push({'url':e.data.list[i],'check':false})
                       }else{
                           this.list_r.push({'url':e.data.list[i],'check':false})
                       }
                   }
                }).catch()
            },
            on_img(a){
                // 这里是点击点击选择
                a.check = !a.check;
                // 查到点击的图片是遍历出来的第几个，把他们都放进到一个img的数组中
                var index = this.img.indexOf(a.url);
                if(index < 0){
                    this.img.push(a.url);
                }else{
                    this.img.splice(index, 1);
                }
            },
            import_img(){
                if(this.img.length==0){
                    this.Toast('请选择导入图片');
                    return  false;
                }else{
                    //提交之后所有的图片都放到img数组里了
                    let url_list = this.$parent.url_list
                    let num  = this.$parent.num
                    let  ls = Object.getOwnPropertyNames(url_list).length
                    console.log(ls)
                    if(num == null){
                        url_list.five=this.img[0];

                    }else{
                        if(ls == 1){
                        url_list.one=this.img[0];
                        console.log(url_list.one)
                        url_list.two=this.img[1];
                        url_list.three=this.img[2];
                        url_list.four=this.img[3];
                      }else if(ls == 2){
                         url_list.two=this.img[0];
                        url_list.three=this.img[1];
                        url_list.four=this.img[2];
                       }else if(ls == 3){
                         url_list.three=this.img[0];
                        url_list.four=this.img[1];
                      }else if(ls == 4){
                           url_list.four=this.img[0];
                    }

                    }
                    
                     history.go(-2);

                    console.log(this.img)
                }
              
            }
        }
    }
</script>