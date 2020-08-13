// import axiosIns from './axiosIns'
import axiosIns from '../utils/request';

/**
 * 放置每个模块的接口，如果很大可以将这个页面拆分一下
 */
// 根据商品唯一标识“payTypeId”数组，批量获取商品详情
export const jkGoodsDetailInfo = data => axiosIns.post(`/pay/goodsDetailInfo`, data);
