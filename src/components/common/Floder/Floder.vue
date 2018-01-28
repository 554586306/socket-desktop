<template>
	<transition name="fade">
  		<div class="layout1" v-if="visible" @click="floderClick($event)" ref="floder">
	        <header class="header" v-drag>
	        	<div @click="handleMini">
	        		<Icon class="icon minus" type="ios-minus"></Icon>
	        	</div>
	        	<div @click="handlePlus">
	        		<Icon class="icon puls" type="ios-plus"></Icon>
	        	</div>
				<div @click="">
					<Icon class="icon close" type="ios-close"></Icon>
				</div>
	        </header>
	        <section class="menu">
	        	<div class="tab">
	        		<Icon type="home" class="tabicon"></Icon>
	        	</div>
	        </section>
	        <section class="content">
	        	{{msg}}{{zIndex}}---
	        	<!--<component :is="whichCom"></component>-->
	        </section>
	        <footer class="footer">
	        	<div>
	        		footer
	        	</div>
	        </footer>
		</div>
	</transition>
</template>

<script>
import { Layout,Icon } from "iview";
import Bus from "@/common/bus.js"
import store from "@/store";

export default {
  name: 'floder',
  props:{
  	msg: Object
  },
  data () {
    return {
    	visible: true,
    	floderSize:{},  //存储原位置大小
    	whichCom: ""  //用哪个组件？
    }
  },
  components:{
  	Icon
  },
  computed:{
  	zIndex(){
  		return store.state.floder.ZINDEX
  	}
  },
  directives:{
	drag: {
		inserted:function(el,binding,vnode){
			var oDiv = el
			oDiv.onmousedown = function(e){
				store.commit('floder/INCREMENT')  // 增加zindex
				oDiv.parentNode.style.zIndex = store.state.floder.ZINDEX
				var disX = e.clientX - oDiv.parentNode.offsetLeft
				var disY = e.clientY - oDiv.parentNode.offsetTop
				document.onmousemove = function(e){
					var l = e.clientX - disX
					var t = e.clientY - disY
					if(e.clientX<0){
						l = 0 - disX
					}else if(e.clientX>window.innerWidth){
						l = window.innerWidth - disX
					} ;
					if(e.clientY<0){
						t = 0 - disY
					}else if(e.clientY>window.innerHeight){
						t = window.innerHeight - disY
					} ;
					oDiv.parentNode.style.left = l + 'px'
					oDiv.parentNode.style.top = t + 'px'
					
					vnode.context.$data.floderSize.left = l  //拖动后，保存新位置
					vnode.context.$data.floderSize.top = t  //拖动后，保存新位置
					vnode.context.$data.floderSize.width = 600  //拖动后，保存新位置
					vnode.context.$data.floderSize.height = 400  //拖动后，保存新位置
//					console.log(vnode.context.$data.floderSize)
				}
				document.onmouseup = function(){
					document.onmousemove = null
					document.onmouseup = null
				}
			}
		}
	}
  },
  methods:{
//	handleClose(){
//		store.commit('floder/FLODER_STATE_SUBTRACT',this.msg) // 关闭后，数组中的文件夹对象删除
//		this.visible = false;		//隐藏此文件夹
//	},
  	up(){
		store.commit('floder/INCREMENT')  // zindex++
  		this.$refs['floder'].style.zIndex = store.state.floder.ZINDEX
		store.commit('floder/FLODER_ACTIVE_FUN',this.msg) // 激活的文件夹放到数组末尾
  	},
  	floderClick(e){ //点击后，文件夹上来
  		store.commit('floder/INCREMENT')  // zindex++
  		this.$refs['floder'].style.zIndex = store.state.floder.ZINDEX
		store.commit('floder/FLODER_ACTIVE_FUN',this.msg) // 激活的文件夹放到数组末尾
		
		if(e.target.classList.contains("close")){
			store.commit('floder/FLODER_STATE_SUBTRACT',this.msg) // 关闭后，数组中的文件夹对象删除
  			this.visible = false;		//隐藏此文件夹
		}
  	},
  	handlePlus(){  //最大化
  		if(this.floderSize.flag == false){
  			this.$refs['floder'].style.left = 0
  			this.$refs['floder'].style.top = 0
  			this.$refs['floder'].style.width = `${window.innerWidth}px`
  			this.$refs['floder'].style.height = `${window.innerHeight}px`
  			this.floderSize.flag = true
  		}else{
  			this.$refs['floder'].style.left = `${this.floderSize.left}px`
  			this.$refs['floder'].style.top = `${this.floderSize.top}px`
  			this.$refs['floder'].style.width = `${this.floderSize.width}px`
  			this.$refs['floder'].style.height = `${this.floderSize.height}px`
  			this.floderSize.flag = false
  		}
  	},
  	handleMini(){
  		
  	}
  },
  created(){
  	Bus.$on('active:floder',(msg)=>{ // 点击桌面图标后判断是否存在
  		if(msg==this.msg){
  			this.up()
  		}
  	})
    this.floderSize = {  //存储原位置大小
		left:200,
		top:100,
		width:600,
		height:400,
		flag:false  // true:最大化
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	@base-height: 25px;  /*文件夹上下*/
	@floder-width: 60%;
	.layout1{
	    border: 1px solid #d7dde4;
	    border-radius: 4px;
	    overflow: hidden;
		/*display: flex;
		align-items:center;
		justify-content:center;*/
	    height: 400px;
	    width: 600px;
	    position: absolute;
	    left: 200px;
	    top: 100px;
	    display: flex;
	    flex-flow: column;
	    .header{
	    	width: 100%;
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
	    	width: 100%;
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
	    	width: 100%;
	    	background: #fff;
	    	flex-grow: 1;
	    	padding: 10px 20px;
	    }
	    .footer{
	    	background: #f5f7f9;
	    	width: 100%;
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
