// 关于版权登记
const explain = [{
    path: '/explain',
    name: 'explain',
    meta: {
        title: "版权登记说明"
    },
    components: {
        default: resolve => require(['../../components/explain/explain.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/switch',
    name: 'switch',
    meta: {
        title: ""
    },
    components: {
        default: resolve => require(['../../components/switch/switch.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
},{
    path: '/',
    name: '',
    meta: {
        title: ""
    },
    components: {
        default: resolve => require(['../../components/switch/switch.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
}]

export default explain;