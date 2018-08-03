//测试弹出层，选择作品
const upload = [{  
        path: '/library_into',
        name: '/library_into',
            meta: {
                title: "我的作品"
            },
            components: {
                default:resolve => require(['../../components/library_into/library_into.vue'], resolve),
                headers:resolve => require(['../../components/common/header.vue'], resolve)
            }
        }
]
export default upload;