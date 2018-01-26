<template>
	<transition name="fade">
	  <div class="container" v-if="visible">
		  <div class="layout">
		  	<Layout>
		        <Header>
		        	123
		        </Header>
		        <Content>
		        	<div class="mini icon">—</div>
		        	<div class="close icon" @click="handleActions('close')">X</div>
		        	<div>{{msg}}</div>
		        </Content>
		        <Footer>
		        	432
		        </Footer>
	    	</Layout>
	  	</div>
	  </div>
	</transition>
</template>

<script>
import Vue from "vue";
import iview from "iview";
console.log(iview)
Vue.use(iview)
export default {
  name: 'com-floder',
  props:{
  	
  },
  data () {
    return {
    	visible: true,
    	msg:""
    }
  },
  components:{
  	
  },
  methods:{
  	handleActions(action){
  		this.visible = false;
  	}
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@floder-width: 60%;
	@icon-width: 20px;
	.container{
		display: flex;
		align-items:center;
		justify-content:center;
	    height: @floder-width;
	    width: @floder-width;
	    position: absolute;
	    background: #fff;
	    /*left: 20%;
	    top: 20%;*/
	    .icon{
	    	width: @icon-width;
	    	height: @icon-width;
	    	background: hotpink;
	    	float: left;
	    	margin: 20px;
	    	border-radius: 50%;
	    	text-align: center;
	    	line-height: @icon-width;
	    	cursor: pointer;
	    }
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s
	}
	
	.fade-enter,
	.fade-leave-active {
		/*opacity: 0;*/
		transform: scale(0);
	}
</style>
