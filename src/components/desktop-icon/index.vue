<template>
  <div class="container">
  	<div class="icon" v-for="(item,index) in app" :style="{background:item.color}" @dblclick="openApp(item)">
  		{{item.name}}
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@app-width: 80px;
	.container{
    height: 100%;
    width: 100%;
    position: fixed;
    .icon{
    	line-height: @app-width;
    	width: @app-width;
    	height: @app-width;
    	margin: 20px;
    	user-select: none;
    }
	}
</style>
