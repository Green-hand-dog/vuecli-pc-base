import axios from 'axios';
import Vue from 'vue';
// import { Toast } from 'vant';

// axios超时时间设置
const instance = axios.create({
  timeout: 10000,
})

// 全局请求loading提示
// Vue.use(Toast);
// let loadingCount = 0;

// axios请求拦截
instance.interceptors.request.use(
	config => {
		// 每个请求前都开启loading并计数
		loadingCount++;
		if (loadingCount > 0) {
			// Toast.loading({
			//   message: '加载中...',
			//   forbidClick: true,
			// 	duration:0,
			// });
		}
		
		// 中台相关H5登录token验证
		// let accessToken = storageUtils.getObject('accessToken');
		// console.log('>>>accessToken:',accessToken,typeof accessToken);
		// if (typeof accessToken !== 'object') {
		// 	config.headers.common['Authorization'] = `Bearer ${accessToken}`;
		// }else{
		// 	Toast('请重新获取授权码');
		// }
		
		return config
	} ,error => {
		return Promise.reject(error);
	}
)

// axios响应拦截
instance.interceptors.response.use(
	response => {
		// 每个请求结束后,清除一个loading的计数,loading计数为0的时候,关闭loading
		loadingCount--;
		// console.log('res>>>>>>',loadingCount);
		// if (loadingCount == 0) {
		// 	Toast.clear();
		// }
		
		return response.data;
	},error => {
		console.log('>>>error',error);
		// 出现请求非200的情况,清除loadingCount
		loadingCount = 0;
		// toast提示,默认单例模式,loading会被下面的错误提示覆盖,然后消失
		if (error.response) {
			switch (error.response.status){
				// case 401:
				// 	console.log('===========401============');
				// 	Toast('token验证不通过~');
				// 	break;
				// case 403:
				// 	console.log('===========403============');
				// 	Toast('403~');
				// 	break;
				// case 429:
				// 	console.log('===========429============');
				// 	Toast('429~');
				// 	break;
				// case 500:
				// 	console.log('===========500============');
				// 	Toast('服务500了~');
				// 	break;
				// default:
				// 	console.log('===========axios err============');
				// 	Toast('axios请求失败~');
				// 	break;
			}
		}
		return Promise.reject(error);
	}
)

export default instance;