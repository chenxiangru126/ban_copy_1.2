//测试弹出层，选择作品
const reg_list = [{  
    path: '/reg_list',
    name: 'reg_list',
        meta: {
            title: "版权登记"
        },
        components: {
            default:resolve => require(['../../components/reg_list/reg_list.vue'], resolve),
            headers:resolve => require(['../../components/common/header.vue'], resolve)
        }
    }
]
export default reg_list;