const ban_cun_zhan = [{  
    path: '/ban_cun_zhan',
    name: 'ban_cun_zhan',
        meta: {
            title: "版权存证证书"
        },
        components: {
            default:resolve => require(['../../components/ban_cun_zhan/ban_cun_zhan.vue'], resolve),
            headers:resolve => require(['../../components/common/header.vue'], resolve)
        }
    },
    {  
        path: '/shen_zhong',
        name: 'shen_zhong',
            meta: {
                title: "版权存证证书"
            },
            components: {
                default:resolve => require(['../../components/shen_zhong/shen_zhong.vue'], resolve),
                headers:resolve => require(['../../components/common/header.vue'], resolve)
            }
        },
        {  
            path: '/shen_wan',
            name: 'shen_wan',
                meta: {
                    title: "版权登记证书"
                },
                components: {
                    default:resolve => require(['../../components/shen_wan/shen_wan.vue'], resolve),
                    headers:resolve => require(['../../components/common/header.vue'], resolve)
                }
            },
            {  
                path: '/zheng_detail',
                name: 'zheng_detail',
                    meta: {
                        title: "版权证书"
                    },
                    components: {
                        default:resolve => require(['../../components/zheng_detail/zheng_detail.vue'], resolve),
                        headers:resolve => require(['../../components/common/header.vue'], resolve)
                    }
                },
                {  
                    path: '/fenxiang',
                    name: 'fenxiang',
                        meta: {
                            title: "版权证书"
                        },
                        components: {
                            default:resolve => require(['../../components/fenxiang/fenxiang.vue'], resolve),
                            headers:resolve => require(['../../components/common/header.vue'], resolve)
                        }
                    },
                    {  
                        path: '/search',
                        name: 'search',
                            meta: {
                                title: "证书查询"
                            },
                            components: {
                                default:resolve => require(['../../components/search/search.vue'], resolve),
                                headers:resolve => require(['../../components/common/header.vue'], resolve)
                            }
                        },
                        
    
]
export default ban_cun_zhan;