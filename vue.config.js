// 固定写法:path是node.js的路径模块，用来处理路径统一的问题
const path = require('path');

const option = {
	// index.html加载静态资源时候的路径,建议改配置,默认相对路径,就是index+css+img+js形式的目录
	publicPath:'./',
	productionSourceMap: false,
	devServer:{
		// 指定host会在npm run serve 后对本地运行的地址ip进行设置
		// 如果不写的话,默认localhost和本地ip两个地址可以运行
		host:'127.0.0.1',
		port:4000,
		https:false,
		
		proxy:{
			
			// ssp-admin
			'/ssp-admin-server':{
				target:'http://localhost:8685',
				// target:'http://www.comb-china.com/gateway/ssp/admin',
				ws:true,
				changeOrigion:true,
				pathRewrite:{
					'^/ssp-admin-server':'',
				}
			},
			
			// ssp-auth
			// baseurl--http://localhost:4000/ssp-auth-server/v1/
			'/ssp-auth-server': {
			  // target: 'http://localhost:8681',
			  target: 'http://www.comb-china.com/gateway/ssp/auth',
				// target: 'http://172.18.141.175:18080/',
			  ws: true,
			  changOrigin: true,
			  pathRewrite: {
			    '^/ssp-auth-server': ''
			  }
			},
			
			// ssp-sms-server 短信服务代理
			'/ssp-sms-server':{
				// http://172.18.141.175:18080/gateway/ssp/msg/v1/front/sendmsg
				target:'http://www.comb-china.com/gateway/ssp/msg/v1',
				ws:true,
				changeOrigion:true,
				pathRewrite:{
					'^/ssp-sms-server':'',
				}
			},
			
			// smartcity-sms
			'/smartcity-sms-server': {
			  target: 'http://localhost:7019',
			  ws: true,
			  changOrigin: true,
			  pathRewrite: {
			    '^/smartcity-sms-server': ''
			  }
			},
			// lj-test
			'/lj-test-server': {
			  target: 'http://localhost:8149',
			  ws: true,
			  changOrigin: true,
			  pathRewrite: {
			    '^/lj-test-server': ''
			  }
			},
			// ssp-user
			// dev下:/ssp-user-server/front/register请求
			// 识别代理前:/ssp-user-server/front/register
			// 识别代理后:http://www.comb-china.com/gateway/ssp/user/v1/front/register
			// 测试或者生产环境:http://1.82.133.107:81/gateway/ssp/user/v1/front/register
			// F12仍然是代理前的地址,实际的请求是代理后的地址
			'/ssp-user-server': {
			  // target: 'http://localhost:8680',
			  target: 'http://www.comb-china.com/gateway/ssp/user/v1',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-user-server': ''
			  }
			},
			'/ssp-scenic': {
			  // target: 'http://localhost:8680',
			  target: 'http://www.comb-china.com/gateway/ssp/scenic',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-scenic': ''
			  }
			},
			'/ssp-order': {
			  // target: 'http://localhost:8680',
			  target: 'http://www.comb-china.com/gateway/ssp/order',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-order': ''
			  }
			},
			'/ssp-auth': {
			  // target: 'http://localhost:8680',
			  target: 'http://www.comb-china.com/gateway/ssp/auth/v1',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-auth': ''
			  }
			},
			'/ssp-pay': {
			  // target: 'http://localhost:8680',
			  target: 'http://www.comb-china.com/gateway/ssp/pay/v1',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-pay': ''
			  }
			},
			'/ssp-store': {
			  // target: 'http://localhost:8680',
			  target: 'http://testbs.ggjfw.com/ejavashop-h5/api/ggpt',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-store': ''
			  }
			},
			// http://testbs.ggjfw.com/emergencyOrder/
			'/ssp-appoint': {
			  // target: 'http://localhost:8680',
			  target: 'http://testbs.ggjfw.com/emergencyOrder/api',
			  ws: true,// 是否启用websockets
				//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
			  changOrigin: true,
				// 此处开启重写,会将识别到的/ssp-user-server替换成'',否则只是更改前面的域名
			  pathRewrite: {
			    '^/ssp-appoint': ''
			  }
			},
		}
	},
	
	css: {
		
	},
	
	configureWebpack: {//引入jquery
	    externals: {
			'echarts': 'echarts' // 配置使用CDN
		}
	  },
	chainWebpack: config => {
		
	}
}

module.exports = option;