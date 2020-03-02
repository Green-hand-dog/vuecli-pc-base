<template>
  <div id="index">
		<div>
			index
		</div>
		<router-view/> 
  </div>
</template>

<script>
import storageUtils from '@/utils/storageUtils.js';
import {mapActions, mapState} from 'vuex' //注册 action 和 state
export default {
	name:'HomePage',
	components: {
    
	},
	data() {
		return {
			// active: 0,// nav点击控制显示样式,取值自全局变量navNum
		};
	},
	computed: {
		//在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
		// 'count' 
		...mapState([
			'navNum' 
		]),
	},
	watch:{
		
	},
	created() {
		
	},
	mounted(){
		
	},

	methods: {
		//在这里引入 action 里的方法，使用方法和 methods 里的其他方法一样
		// 'incrementStep'
		// 'increment'
		...mapActions([
			'changeNav'
		]),
	}
};
</script>

<style lang="scss">
#index{
	background: #eee;
	font-size: 20px;
}
</style>
