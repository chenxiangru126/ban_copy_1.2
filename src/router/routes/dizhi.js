// 地址相关
const dizhi = [{
    path: '/dizhi',
    name: 'dizhi',
    meta: {
        title: "地址"
    },
    components: {
        default: resolve => require(['../../components/asset/dizhi/dizhi.vue'], resolve),
        headers: resolve => require(['../../components/common/header.vue'], resolve)
    }
}]
export default dizhi;