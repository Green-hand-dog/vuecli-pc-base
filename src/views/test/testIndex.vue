<template>
  <div id="test">
		<!-- testIndex
		<div class="test-color" v-for="(item,index) in 6" :key="index">
			123
		</div>
		<el-button type="warning" round>警告按钮</el-button>
		<div id="main" style="width: 600px;height:400px;"></div> -->
    <div v-if="flag" id="main" style="width:100%;height:800px"></div>
  </div>
</template>

<script>
export default {
	name:'order',
	components: {
    
	},

	data() {
		return {
      flag:true,
      categories:[],
      data:[],
		};
	},

	mounted(){
		console.log('mounted')
    window.handleClick = this.handleClick;
    this.test();
	},

  methods: {
    handleClick(){
        console.log('click',this);
        // 
    },
    test(){
        let _this = this;
        // 画布初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 生成类目标签，this.getGraphOption()方法需要使用
        this.getCategories();
        // 生成关系图关系数据，供渲染方法使用
        this.getData();
        // 获取图标配置信息
        let option = this.getGraphOption();
        myChart.setOption(option);
        myChart.on('legendselectchanged', function(params) {
            _this.flag = false
            var select_value = Object.values(params.selected);
            var index = select_value.findIndex(ele => !ele)
            if(index === -1){
                option.series[0].data = data
            }
            else{
                var arr = data.filter(ele => ele.category <= 1)
                option.series[0].data = arr
            }
            this.setOption(option)
            _this.flag = true
        });
    },
    getData(){
      this.data = [
        {
          name: '主动营销',
          category: 4,
          value:120,
        }, 
        {
          name: '卡券营销',
          category: 4,
          value:120,
        }, 
        {
          name: '线上营销',
          category: 4,
          value:120,
        }, 
        {
          name: '实时匹配推送',
          category: 0,
          value:120,
        }, 
        // {
        //   name: '阿拉丁',
        //   category: 0,
        //   value:120,
        // }, 
        {
          name: '网厅',
          category: 1,
          value:100,
        }, 
        // {
        //   name: '业务中台',
        //   category: 2,
        //   value:60,
        // }, 
        // {
        //   name: '目标用户匹配',
        //   category: 3,
        //   value:100,
        // },
        // {
        //   name: '用户推送',
        //   category: 3,
        //   value:100,
        // },
        // {
        //   name: '用户画像',
        //   category: 3,
        //   value:100,
        // },
        // {
        //   name: '用户行为',
        //   category: 3,
        //   value:100,
        // },
        // {
        //   name: '模型同步部署',
        //   category: 3,
        //   value:100,
        // },
        // {
        //   name: '智慧分析服务',
        //   category: 3,
        //   value:100,
        // },
      ];
    },
    getCategories(){
      // for (let i = 0; i < 5; i++) {
      //     this.categories[i] = {
      //         name: '类目' + i
      //     };
      // }
      this.categories = [
        {name:'能力'},
        {name:'应用'},
        {name:'中台'},
        {name:'服务'},
        {name:'场景'},
      ];
    },
    getGraphOption(){
      let option = {
              // 图的标题
              title: {
                  text: 'ECharts 关系图',
                  show:false
              },
              // 提示框的配置
              tooltip: {
                  enterable: true, // 鼠标可移入tooltip中
                  axisPointer: {
                      type: 'cross',
                      lineStyle: {
                          type: 'solid',
                          width: 1,
                          color: '#eee'
                      }
                  },
                  padding:0,
                  formatter: function(params) {
                     // console.log(params , windows , this)
                     // console.log(params)
                     // console.log(params.$el);
                      var htmlStr = `<div class ="tooltip" >
                          <div class="title-box">
                              <div class="title-left">汇报状态</div>
                              <div class="title-right" onclick="handleClick()">查看详情</div>
                          </div>
                          <div class="content-line"><span class="content-label">描述：</span><span class="content-decs"> ${params.data.name}</span></div>
                          <div class="content-line"><span class="content-label">编码：</span><span class="content-decs">是否已汇报的状态描述</span></div>
                          <div class="content-line"><span class="content-label">类型：</span><span class="content-decs">是否已汇报的状态描述</span></div>
                          <div class="content-line"><span class="content-label">长度：</span><span class="content-decs">是否已汇报的状态描述</span></div>
                      </div>`
                      return htmlStr;
                  },
              //tooltip到鼠标的距离
              position: function (point) {
                  return [point[0]+2, point[1]+2];
              }
              // show:false
              },
              // 工具箱
              toolbox: {
                  // 显示工具箱
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      // 还原
                      restore: {
                          show: true
                      },
                      // 保存为图片
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              legend: [{
                  // selectedMode: 'single',
                  data: this.categories.map(function (a,index) {
                      // if(index > 2 || index === 0){
                      //     return ''
                      // }
                      return a.name;
                  }),
                  icon:'circle',
              }],
              color:['#8dac5a', '#81D3F8', 'gray', '#EC808D', '#FACD91'],
              series: [{
                  type: 'graph', // 类型:关系图
                  layout: 'force', //图的布局，类型为力导图
                  roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                  edgeSymbol: [ 'line','circle'],
                  edgeSymbolSize: [10,2],
                  force: {
                      repulsion: 1000,//子节点之间的间距
                      edgeLength: 250 //[105, 50] ////连线的长度
                  },
                  draggable: true,
                  //线图颜色及文字颜色大小
                  lineStyle: {
                      normal: {
                          width: 1,
                          color: '#ccc',
                      }
                  },
                  //线段上的值，取name字段
                  edgeLabel: {
                      normal: {
                          show: true,
                          formatter: function (x) {
                              return x.data.name;
                          },
                      }
                  },
                  label: {
                      // position: ['50%', '50%'],
                      normal: {
                          show: true,
                          //节点里面字体的大小
                          textStyle: {
                              fontSize: 15,
                          },
                          color:"#fff",
                          formatter: function (val) {
                              var strs = val.data.name.split(''); //字符串数组
                              var str = ''
                              for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                                  str += s;
                                  if(i % 2 === 0)
                                  {
                                    str += '\n'; //按需要求余
                                  } 
                              }
                              return str
                          },
                      }
                  },
                  symbolSize: function (value, params) {//改变节点大小
                      var SizeList = [160, 110, 80, 55, 60];
                      return SizeList[params.data.category]
                  },
                  symbolSize:(value,params) => {
                    console.log(params);
                    return value;
                    // if (params.data.category === 1) {
                    //   return 50;
                    // }else{
                    //   return value;
                    // }
                  },
                  // 数据
                  data:this.data,
                  links: [{
                      source: '实时匹配推送',
                      target: '目标用户匹配',
                      name: ''
                  }, {
                      source: '实时匹配推送',
                      target: '用户推送',
                      name: ''
                  },{
                      source: '实时匹配推送',
                      target: '用户画像',
                      name: ''
                  }, {
                      source: '实时匹配推送',
                      target: '用户行为',
                      name: ''
                  }, {
                      source: '网厅',
                      target: '主动营销',
                      name: ''
                  }, {
                      source: '网厅',
                      target: '卡券营销',
                      name: ''
                  }, {
                      source: '网厅',
                      target: '线上营销',
                      name: ''
                  }, {
                      source: '实时匹配推送',
                      target: '网厅',
                      name: ''
                  }],
                  categories: this.categories,
              }]
          }
      return option;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
