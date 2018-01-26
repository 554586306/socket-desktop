<template>
  <div class="container" :style="beginPos">
  	<!--开始按钮-->
    <div class="begin icon"></div>
    <!--桌面-->
    <div class="show-desktop icon"></div>
    <!--最小化后的App-->
    <div class="miniapp icon" v-for="(item,index) in miniApp" :style="{background:item['color']}"></div>
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
    	miniAppArr:[]
    }
  },
  created(){
  	this.beginPos[this.pos] = 0 ;
  },
  computed:{
  	miniApp(){
  		this.miniAppArr.push(this.isOpen)
  		return this.miniAppArr
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
    	width: @menu-height;
    }
    .begin{
    	background: #ccc;
    	width: @menu-height;
    	height: 100%;
    	&:hover{
    		background: #fff;
    	}
    }
    .show-desktop{
    	width: @menu-height;
    	height: 100%;
    	background: #42B983;
    }
	}
</style>
