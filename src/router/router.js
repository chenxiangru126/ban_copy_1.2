 /* 
 @1 goods：商品相关／购物车
 @2 order：我的订单
 @3 store_abouts：商店资料／店铺申请流程
 @4 wallet：钱包
 @5 recevie_address：地址管理
 */
 import explain from './routes/explain';
 import reg from './routes/reg'
 import dizhi from './routes/dizhi';
 import ban_copy from './routes/ban_copy';
 import upload from './routes/upload';
 import  request from './routes/request';
 import pay from './routes/pay';
 import reg_list from './routes/reg_list';
 import ban_cun_zhan from './routes/ban_cun_zhan';
 import data_center from './routes/data_center';

 export default [
     ...explain,
     ...reg,
     ...dizhi,
     ...ban_copy,
     ...upload,
     ...request,
     ...pay,
     ...reg_list,
     ...ban_cun_zhan,
     ...data_center
 ];
 