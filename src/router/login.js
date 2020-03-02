export default[
	{
		// 不含底部导航的一级页面
	  path: '/index',
	  name: 'index',
	  component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
		children:[
			{
				path: '/index/loginIndex',
				name: 'loginIndex',
				component: () => import(/* webpackChunkName: "about" */ '../views/login/loginIndex.vue'),
				meta:{
					title: '登录首页'
				}
			},
		]
	},
]