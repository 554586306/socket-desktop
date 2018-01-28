<template>
  <div class="container">
  	<div class="content" v-for="(item,index) in app" @dblclick="openApp(item)">
  		<Icon class="icon" :type="item.icon"></Icon>
  		<div class="title">{{item.name}}</div>
  	</div>
  </div>
</template>

<script>
import app from "@/mock/desktopApp"
export default {
  name: 'desktop-icon',
  props:{
  	
  },
  data () {
    return {
    	app:app
    }
  },
  methods:{
  	openApp(item){
  		this.$floder({msg:item})
  		this.$emit("isOpen",item)
  	}
  },
  created(){
  	console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@icon-size: 50px;
	@app-width: 80px;
	.container{
    /*height: 100%;
    width: 100%;*/
    position: fixed;
    .content{
    	padding: 5px;
    	user-select: none;
	    .icon{
	    	line-height: @app-width;
	    	width: @app-width;
	    	height: @app-width;
				font-size: @icon-size;
				color: #fff;
	    }
	    .title{
	    	color: #fff;
	    	text-shadow: 0px 3px 3px #000;
	    	-webkit-text-stroke: 0.1px #000;
	    }
    }
	}
</style>
