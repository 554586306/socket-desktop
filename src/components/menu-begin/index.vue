<template>
  <div class="container" :style="beginPos">
  	<!--开始按钮-->
    <div class="begin icon">
    	<Button type="primary" icon="pie-graph" height="100%"></Button>
    </div>
    <!--桌面-->
    <div class="show-desktop icon" @click=""></div>
    <!--最小化后的App-->
    <div class="miniapp icon" v-for="(item,index) in miniApp" @click="focusFloder(item)" :class="{activeFloder:getActiveFloder==item}">
    	<Icon :type="item.icon"></Icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menu-begin',
  props:{
  	pos: String,
  	isOpen: Object
  },
  data () {
    return {
    	beginPos:{},
    	miniAppArr:[],
    	activeFloder:0
    }
  },
  created(){
  	this.beginPos[this.pos] = 0 ;
  },
  computed:{
  	miniApp(){
  		this.miniAppArr = this.$store.state.floder.FLODER_STATE
  		return this.miniAppArr
  	},
  	getActiveFloder(){
  		var arrfloder = this.$store.state.floder.FLODER_ACTIVE;
  		this.activeFloder = arrfloder[arrfloder.length-1] //找到最后一位
  		return this.activeFloder
  	}
  },
  methods:{
  	focusFloder(item){
  		this.$floder({msg:item})   //show floder or open floder
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@menu-height: 40px;
	.container{
    background: rgba(0,0,0,.8);
    height: @menu-height;
    width: 100%;
    position: fixed;
    bottom: 0;
    .icon{
    	float: left;
    	height: @menu-height;
    	/*width: @menu-height;*/
    	.ivu-btn-primary{
    		height: 100%;
    		font-size: @menu-height/2;
    	}
    }
    .begin{
    	height: 100%;
    }
    .show-desktop{
    	width: @menu-height/4;
    	height: 100%;
    	background: rgba(62,44,237,.5);
    	border-left: 1px solid #ccc;
    	position: absolute;
    	right: 0;
    	&:hover{
    		background: blue;
    	}
    }
    .miniapp{
    	width: @menu-height;
    	height: 100%;
    	font-size: @menu-height/2;
    	color: #fff;
    	text-align: center;
    	line-height: @menu-height;
    	&:hover{
    		color: #F7B84F;
    	}
    }
    .activeFloder{
    	color: yellow;
    }
	}
</style>
