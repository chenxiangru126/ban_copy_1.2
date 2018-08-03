//测试弹出层，选择作品
const data_center = [{  
    path: '/data_center',
    name: 'data_center',
        meta: {
            title: "填写登记"
        },
        components: {
            default:resolve => require(['../../components/data_center/data_center.vue'], resolve),
            headers:resolve => require(['../../components/common/header.vue'], resolve)
        }
    }
]
export default data_center;