<template>
<div class="reg_list">
    <div class="list_c" v-for="(item,index) in reg_list" :key="index" @click="dianji(item)">
            <p class="list_h" ><span>编号：{{item.number}}</span> </p>
            <div class="list_d" >
                <div class="list_lt" >
                    <img :src="item.url" />
                    <div style="flex: 1;position: relative">
                   
                        </div>
                        <div class="list_introduce">
                            <div class="list_span">
                            <span style="color:#e7e7e7; font-size:1rem">{{item.name}}</span>
                            <span style="color:#8B8B8B;font-size:14px;">版权存证证书</span>
                            <span  style="color:#8B8B8B;font-size:12px;">{{item.upload_time}}</span>
                            </div>
                         <P class="list_rt">
                            <img src="../../static/images/shenqing_zhong.png" alt="" v-show="item.status == 1 ">
                            <img src="../../static/images/yishenqing.png" alt="" v-show="item.status == 0 ">
                             <span style="color:#8B8B8B;font-size:12px;" v-show="item.status == 0 ">{{item.over_time}}</span>
                        </P>
                        </div>
                       
                    </div>
              </div>

              
               
            </div>
                      
        </div>

        
    
</template>
<script>
import util from '../../libs/util'
export default {
    mounted(){
        var that = this
        setTimeout(()=>{
         that.initData();

        },1000)
          
         },
    data(){
        return{
           reg_list:[],       
        }
    },
    methods:{
        
        initData(){
          
           this.util.ajax.post('/admin/authCopyright/getCopyrightDataList.do').then(e=>{
            if( e.code == 200){
                console.log(e.data)            
                this.reg_list = e.data
            }
        })
        },     
        dianji(item){
      
            let state = item.status
            if(state == 0){
                // 跳转到申请成功的页面
                let number = item.number
                 this.$router.push('/shen_wan?number='+number)
            }else if(state == 1){
                //跳转到申请中的页面
                let  number = item.number
                 this.$router.push('/shen_zhong?number='+number)
            }else if(state == 3){
                // 跳转到未申请的页面
                let  number = item.number
                let name = item.name
                this.$router.push('/ban_cun_zhan?number='+number+'&name='+name)
            }else if(state == 2){
               let  number = item.number
                let name = item.name
                this.$router.push('/fail?number='+number+'&name='+name)

            }
        },
        search_list(){
        this.$router.push('/search')

        },        
    }   
}
</script>
<style lang="less">
@import 'reg_list.less';
</style>


