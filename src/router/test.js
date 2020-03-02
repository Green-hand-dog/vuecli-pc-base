export default[
	{
		// 含有底部导航的一级页面
	  path: '/user',
	  name: 'user',
	  component: () => import(/* webpackChunkName: "about" */ '../views/user.vue'),
		children:[
			{
				path: '/user/testIndex',
				name: 'testIndex',
				component: () => import(/* webpackChunkName: "about" */ '../views/test/testIndex.vue'),
				meta:{
					title: '测试首页'
				}
			},
		]
	},
]