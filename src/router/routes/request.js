//测试弹出层，选择作品
const request = [{  
    path: '/success',
    name: 'success',
        meta: {
            title: "证书申请"
        },
        components: {
            default:resolve => require(['../../components/shenqing/success.vue'], resolve),
            headers:resolve => require(['../../components/common/header.vue'], resolve)
        }
    },{  
        path: '/fail',
        name: 'fail',
            meta: {
                title: "申请结果"
            },
            components: {
                default:resolve => require(['../../components/shenqing/fail.vue'], resolve),
                headers:resolve => require(['../../components/common/header.vue'], resolve)
            }
        }
]
export default request;