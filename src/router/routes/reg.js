//注册相关的
const reg = [{
    path: '/register',
    name: 'register',
    meta: {
        title: "绑定手机号"
    },
    components: {
        default: resolve => require(['../../components/register/register.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/real',
    name: 'real',
    meta: {
        title: "实名认证"
    },
    components: {
        default: resolve => require(['../../components/register/real.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
  },{
    path: '/qiye',
    name: 'qiye',
    meta: {
        title: "实名认证"
    },
    components: {
        default: resolve => require(['../../components/qiye/qiye.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
  },{
    path: '/select',
    name: 'select',
    meta: {
        title: "选择身份"
    },
    components: {
        default: resolve => require(['../../components/select/select.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
  },{
    path: '/polo',
    name: 'polo',
    meta: {
        title: "版权协议"
    },
    components: {
        default: resolve => require(['../../components/polo/polo.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
  }
]
  export default reg;