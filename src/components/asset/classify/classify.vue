<template>
   
   <div class="showChose" v-show="!showChose">
      <div class="dialog_rgba_bg"></div>
    <transition name="move">  
      <section class="address">
        <section class="title">
          <h4>
            作品类别
          </h4>
          <span @click="closeAdd()" ><img src="../../../static/images/cuo.png" alt=""></span>
        </section>
        <section class="title_list">
            <!-- 显示的是一级目录 -->
          <div class="area" @click="provinceSelected()">{{Province?Province:'请选择'}}</div>
          <!-- 显示的是二级目录 -->
          <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
          <!-- 显示的是三级目录 -->
          <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
        </section>
        <ul>
            <!-- 遍历的是一级的目录 -->
            <!-- 一级是遍历info, -->
          <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <!-- 遍历的是二级的目录 ,遍历二级的数据-->
          <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <!-- 遍历三级的目录数据， -->
          <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>
        </ul>
       </section>
      </transition>
   </div>
  
  
</template>
<script>
export default {
  name: 'myAddress',
  data () {
    return {
      showChose: false,//整个的弹出层页面
      showProvince: true,//显示一级目录
      showCity: false,//显示二级目录
      showDistrict: false,//显示三级目录
      showCityList: false,//城市的目录
      showDistrictList: false,//市区的
      province: 1, //省讯选择则的值
      city: 3,//市选择的值
      district: 57,//区选择的值
      GetProvinceId: 2,
      District: false,
      Province: false,
      City: false,
      // v-for循环判断是否为当前
      selected: false,
      info: [
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
     }},
 methods: {
    choseAdd: function() {
      this.showChose = true;
    },
    closeAdd: function() {
    //   this.showChose =false;
    //点击事件要发布事件
    this.$emit("listen_to_child_event")
       
    },
    // 过滤显示的市
    _filter(add,name,code) {
      let result = [];
      for(let i=0;i<add.length;i++) {
        if(code == add[i].id){
          result = add[i][name];
        }
      }
      return result;
    },
    getProvinceId: function(code,input,index) {
      this.province = code;
      this.Province = input;
      this.showProvince=false;
      this.showCity=true;
      this.showDistrict = false;
      this.showCityList = this._filter(this.info,'city',this.province);
      // 点击选择当前
      this.info.map( a => a.selected = false );
      this.info[index].selected = true;
    },
    provinceSelected: function() {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      // 清除市级和区级选项
      this.City = false;
      this.District = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
    },
    getCityId: function(code, input, index) {
      this.city = code;
      this.City = input;
      this.showProvince=false;
      this.showCity=false;
      this.showDistrict = true;
      this.showDistrictList = this._filter(this.showCityList,'district',this.city);
      // 选择当前添加active
      this.showCityList.map( a => a.selected = false );
      this.showCityList[index].selected = true;
    },
    citySelected: function() {
      this.showProvince=false;
      this.showCity=true;
      this.showDistrict = false;
    },
    getDistrictId: function(code, input, index) {
      this.district = code;
      this.District = input;
      // 选择当前添加active
      this.showDistrictList.map( a => a.selected = false );
      this.showDistrictList[index].selected = true;
      // 选取市区选项之后关闭弹层
      this.showChose = false;

    //    District: false,
    //   Province: false,
    //   City: false,
      let infos=this.District;
      this.$parent.return_address(infos);
    },
    districtSelected: function() {
      this.showProvince=false;
      this.showCity=false;
      this.showDistrict = true;
    }
  }
}
</script>





 
