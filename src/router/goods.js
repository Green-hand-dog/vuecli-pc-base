export default[
	{
		// 不含底部导航的一级页面
	  path: '/user',
	  name: 'user',
	  component: () => import(/* webpackChunkName: "about" */ '../views/user.vue'),
		children:[
			{
				path: '/user/goodsIndex',
				name: 'goodsIndex',
				component: () => import(/* webpackChunkName: "about" */ '../views/goods/goodsIndex.vue'),
				meta:{
					title: '商品首页'
				}
			},
		]
	},
]