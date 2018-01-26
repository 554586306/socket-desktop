import Vue from "Vue"
import Floder from "./floder"

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