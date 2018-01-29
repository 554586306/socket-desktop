<template>
	<transition name="fade">
  		<div class="layout1" v-if="visible" v-show="show" @click="floderClick($event)" ref="floder" :style="floderSizeAfter">
	        <header class="header" v-drag>
	        	<div @mousedown="handleMini">
	        		<Icon class="icon minus" type="ios-minus"></Icon>
	        	</div>
	        	<div @mousedown="handlePlus">
	        		<Icon class="icon puls" type="ios-plus"></Icon>
	        	</div>
				<div @mousedown="handleClose">
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
    	visible: true,   // 文件夹添加删除
    	show: true,		// 文件夹显示隐藏（最小化）
    	floderSizeBefore:{},  //存储原位置大小
    	floderSizeAfter:{},  //存储现位置大小
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
				if(e.target!=this) return;   // 阻止事件被子元素触发
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
					// oDiv.parentNode.style.left = l + 'px'
					// oDiv.parentNode.style.top = t + 'px'
					
					vnode.context.$data.floderSizeAfter.left = l+'px'  //拖动后，保存新位置
					vnode.context.$data.floderSizeAfter.top = t+'px'  //拖动后，保存新位置
					vnode.context.$data.floderSizeBefore.left = l+'px'  //拖动后，保存新位置
					vnode.context.$data.floderSizeBefore.top = t+'px'  //拖动后，保存新位置
					// console.log(vnode.context.$data.floderSizeBefore)
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
  		// this.$refs['floder'].style.zIndex = store.state.floder.ZINDEX
  		this.floderSizeAfter.zIndex = store.state.floder.ZINDEX
		store.commit('floder/FLODER_ACTIVE_FUN',this.msg) // 激活的文件夹放到数组末尾
  	},
  	floderClick(){ //点击后，文件夹上来
  		store.commit('floder/INCREMENT')  // zindex++
  		this.floderSizeAfter.zIndex = store.state.floder.ZINDEX
  		// this.$refs['floder'].style.zIndex = store.state.floder.ZINDEX
		store.commit('floder/FLODER_ACTIVE_FUN',this.msg) // 激活的文件夹放到数组末尾
  	},
  	handlePlus(){  //最大化
  		if(this.floderSizeAfter.flag == false){
  			this.floderSizeAfter.left = '0px'
  			this.floderSizeAfter.top = '0px'
  			this.floderSizeAfter.width = `${window.innerWidth}px`
  			this.floderSizeAfter.height = `${window.innerHeight}px`
  			this.floderSizeAfter.flag = true
  			// console.log(this.floderSizeAfter)
  			// console.log(this.floderSizeBefore)
  		}else{
  			// console.log(this.floderSizeBefore)
  			this.floderSizeAfter.left = this.floderSizeBefore.left
  			this.floderSizeAfter.top = this.floderSizeBefore.top
  			this.floderSizeAfter.width = this.floderSizeBefore.width
  			this.floderSizeAfter.height = this.floderSizeBefore.height
  			this.floderSizeAfter.flag = false
  		}
  	},
  	handleMini(){
  		this.show = false;
  		store.commit('floder/FLODER_ACTIVE_BEFORE',this.msg) // 调整数组顺序，把这个文件夹放到数组前面

  	},
  	handleClose(){
  		store.commit('floder/FLODER_STATE_SUBTRACT',this.msg) // 关闭后，数组中的文件夹对象删除
  		this.visible = false;		//隐藏此文件夹
  	},
  	init(){
	  	let top = window.innerHeight * 0.2
	  	let left = window.innerWidth * 0.2
	  	let width = window.innerWidth * 0.5
	  	let height = window.innerHeight * 0.6
	  	
	    this.floderSizeBefore = {  //存储原位置大小
			top:top+'px',
			left:left+'px',
			width:width+'px',
			height:height+'px',
			flag:false  // true:最大化
	    }
	    this.floderSizeAfter = {  //存储现位置大小
	    	top:top+'px',
			left:left+'px',
			width:width+'px',
			height:height+'px',
			zIndex: this.zIndex,
			flag:false  // true:最大化
	    }
  		
  	}
  },
  created(){
  	Bus.$on('active:floder',(msg)=>{ // 点击桌面图标后判断是否存在
  		if(msg==this.msg){
  			this.show = true;
  			this.up()
  		}
  	});

  	this.init();
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
		justify-content:center;
	    height: 400px;
	    width: 600px;
	    left: 200px;
	    top: 100px;*/
	    position: absolute;
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
