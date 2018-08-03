<template>
<div class="zheng_detail">
 <div class="top">
       <img :src="b_url" alt="">
       <img :src="url1" alt="">
       <img :src="url2" alt="">
 </div>
 <div class="content">
  <p style="font-size:18px;color:#fff">中云介绍</p>
  <p style="margin-top:20px;font-size:14px">1、中云文化大数据科技有限公司简介</p>
  <p style="text-indent:1.5rem"><a  href="http://www.zhongyunwenhua.cn" style="text-decoration:none;color:#3F70AD;"> www.zhongyunwenhua.cn</a></p>

  <p style="margin-top:20px">中云文化大数据科技有限公司于2015年2月16日设立，注册资金人民币5.2亿元，是一家注册于中华人民共和国境内的文化大数据平
     台公司，全面负责“CCDI版权云”项目的市场运营及产业投资建设工作。“CCDI版权云”项目集数字版权内容的生产、加工、存储、
     出版、发行、交易、结算、监测、保护于一体，贯穿产业上下游形成完整的数字版权产业链。
  </p>
   <p style="margin-top:20px;font-size:14px;">2.贵州省版权局简介</p>
   <p style="margin-top:20px">贵州省版权局是贵州省作品登记主管部门，下设版权管理处负责贯彻落实版权和著作权保护管理使用的政策措施；承担本省国家享有著作权作
      品的管理和使用工作，对作品的著作权登记和法定许可使用进行管理；对涉外著作权贸易、涉外著作权合同登记、外国作品著作权认证工作进
      行监督管理；负责著作权涉外条约有关事宜，组织查处著作权领域重大违法违规行为；协调版权产业建设与发展，指导版权产业基地和区域性
      特色版权产业群建设；组织推进软件正版化工作。
   </p>
   <p style="margin-top:20px;text-align:center">
       <img src="../../static/images/zhong_yun_er_wei.png" alt="" width="68" height="68">
       
   </p>
   <p style="margin-top:12px;text-align:center">通过扫一扫关注中云公众号</p>


 </div>


</div>
    
</template>
<script>
import util from '../../libs/util'
export default {
    data(){
        return{
          number :null, 
          url1:null,
          url2:null,
          b_url:null,

        }
    },
     mounted(){
      // 请求申请成功显示证书
        let number = this.$route.query.number
        this.number = number
        let _p ={
          number
        }
        this.util.ajax.post('/admin/authCopyright/getCopyrightDataDetails.do',_p).then(e=>{
          //获取url
          if(e.code == 200){
               this.url1 = e.data.c_url1
                this.url2 = e.data.c_url2
                this.b_url = e.data.b_url
          }

        })
        
       
    },
    
}
</script>
<style lang="less">
@import 'zheng_detail.less';

</style>


