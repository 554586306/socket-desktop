import Vue from "Vue"
import Floder from "./floder"
//const Constructor = Vue.extend(Floder)
//let instence = null
//
////管理
//
//export default (options) => {
//	instence ||(instence = new Constructor({
//		el: document.createElement("div")
//	}))
//	instence.options = options
//	document.body.appendChild(instence.$el)
//}

const Constructor = Vue.extend(Floder)
let instence = null

var initInstence = (options)=>{
	instence = new Constructor({
		el: document.createElement("div")
	})
	instence.options = options
	for(var prop in options){
		if(options.hasOwnProperty(prop)){
			instence[prop] = options[prop]
		}
	}
	document.getElementById("app").appendChild(instence.$el)
}

export default initInstence