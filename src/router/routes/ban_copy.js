//注册相关的
const ban_copy = [{
    path: '/ban_copy',
    name: 'ban_copy',
    meta: {
        title: "填写登记信息"
    },
    components: {
        default: resolve => require(['../../components/check_in/ban_copy.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    },
    children:[
      {
            path: '/my_work',
            name: '',
            meta: {
                title: "我的作品"
            },
            components: {
                default:resolve => require(['../../components/my_work/my_work.vue'], resolve),
                headers:resolve => require(['../../components/common/header.vue'], resolve)
            }
        }
    ]
    
   }]
  export default ban_copy;