import Vue from "Vue"
import store from "@/store";
import Floder from "./floder"
import Bus from "@/common/bus.js"

const Constructor = Vue.extend(Floder)  // 创建可复用的构造器

let instence = null

var initInstence = (options)=>{
	let arr = store.state.floder.FLODER_STATE;  //存储文件夹对象的数组
	if(arr.indexOf(options.msg) != -1){  // 已经存在,跳出
		Bus.$emit('active:floder',options.msg)  // 此文件夹提到顶层zindex
//		store.commit('floder/FLODER_ACTIVE_FUN',options.msg) // 调整数组顺序，把新点击的放到前面
		return;
	};
	store.commit('floder/FLODER_STATE_INCREMENT',options.msg) // 通知把文件夹的对象存起来
	instence = new Constructor({         // 创建一个Constructor实例
//		el: document.createElement("div")
	})
	instence.options = options
	for(var prop in options){
		if(options.hasOwnProperty(prop)){
			instence[prop] = options[prop]
		}
	}
	instence.$mount();
	document.getElementById("app").appendChild(instence.$el);
	
}

export default initInstence