export default[
	{
	// 含有底部导航的一级页面
		path: '/index',
		name: 'index',
		component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
		children:[
			{
				path: '/index/ordersIndex',
				name: 'ordersIndex',
				component: () => import(/* webpackChunkName: "about" */ '../views/orders/ordersIndex.vue'),
				meta:{
					title: '订单首页'
				}
			},
		]
	},
]