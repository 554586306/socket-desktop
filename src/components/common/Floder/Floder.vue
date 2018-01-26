<template>
	<transition name="fade">
	  		<div class="layout" v-if="visible">
			    <Layout>
			        <Header class="header">
			        	<div @click="handleActions('close')">
			        		<Icon class="icon close" type="ios-minus"></Icon>
			        	</div>
			        	<div @click="handleActions('close')">
			        		<Icon class="icon close" type="ios-plus"></Icon>
			        	</div>
						<div @click="handleActions('close')">
							<Icon class="icon close" type="ios-close"></Icon>
						</div>
			        </Header>
			        <Content class="menu">
			        	<div class="tab">
			        		<Icon type="home" class="tabicon"></Icon>
			        	</div>
			        </Content>
			        <Content class="content">
			        	<component :is="whichCom"></component>
			        </Content>
			        <Footer class="footer">
			        	<div>
			        		footer
			        	</div>
			        </Footer>
			    </Layout>
			</div>
	</transition>
</template>

<script>
import {Layout,Icon} from "iview";
export default {
  name: 'floder',
  props:{
  	msg:Object
  	
  },
  data () {
    return {
    	visible: true,
    	whichCom: ""  //用哪个组件？
    }
  },
  components:{
  	Layout,Icon
  },
  methods:{
  	handleActions(action){
  		this.visible = false;
  	}
  },
  created(){
  	console.log(this.$options.components)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@base-height: 25px;  /*文件夹上下*/
	@floder-width: 60%;
	.layout{
	    border: 1px solid #d7dde4;
	    border-radius: 4px;
	    overflow: hidden;
		/*display: flex;
		align-items:center;
		justify-content:center;*/
	    height: @floder-width;
	    width: @floder-width;
	    position: absolute;
	    left: 20%;
	    top: 20%;
	    display: flex;
	    .header{
	    	background: #f5f7f9;
	    	height: @base-height;
	    	.icon{
	    		float: left;
	    		color: #000;
	    		line-height: @base-height;
	    		margin: 0px 10px;
	    		cursor: pointer;
	    	}
	    }
	    .menu{
	    	height: @base-height;
	    	background: #ddd;
	    	.tab{
	    		float: left;
	    		.tabicon{
	    			padding:0 15px;
	    			line-height: @base-height;
	    			background: #fff;
	    			border-radius: 4px 4px 0 0;
	    		}
	    	}
	    }
	    .content{
	    	background: #fff;
	    	flex-grow: 1;
	    	padding: 10px 20px;
	    }
	    .footer{
	    	height: @base-height;
	    }
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s
	}
	.fade-enter,
	.fade-leave-active {
		transform: scale(0);
	}
</style>
