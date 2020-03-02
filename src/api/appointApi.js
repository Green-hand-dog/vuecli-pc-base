import request from '@/utils/axiosUtils';
import qs from 'qs';

// 根据package.json配置,确定userBaseURL的路径
const storeBaseURL = process.env.VUE_APP_APPOINT_BASEURL;

// mock登陆
export function mocks(id){
	console.log(id);
	return request({
		// dev时,请求需要使用到代理,必须使用/ssp-user-server开头,http开头无法被识别代理
		url:`${storeBaseURL}v2/mock?certNo=${id}`,
		method:'get',
	})
}

// 获取所有区数据
export function queryAllRegions(){
	// console.log(process.env);
	return request({
		// dev时,请求需要使用到代理,必须使用/ssp-user-server开头,http开头无法被识别代理
		url:`${storeBaseURL}/regions/getSonRegions?parentCode=3501&parentLevel=1`,
		method:'get',
	})
}

// 提交预约信息 /reserveOrder
export function postAppoint(obj){
	let data = qs.stringify(obj);
	console.log(obj);
	// let data = 
	return request({
		// dev时,请求需要使用到代理,必须使用/ssp-user-server开头,http开头无法被识别代理
		url:`${storeBaseURL}/reserveOrder`,
		method:'post',
		data: data,
	})
}
