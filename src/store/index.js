import Vue from 'vue'
import Vuex from 'vuex'
import floder from './floder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count:0
  },
  mutations:{
  	add(state){
  		state.count++
  	}
  },
	modules: {
    floder
	}
})
