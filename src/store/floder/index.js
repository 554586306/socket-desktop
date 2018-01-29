const ZINDEX = 'ZINDEX'   // 文件夹的zindex
const INCREMENT = 'INCREMENT'

const FLODER_STATE = 'FLODER_STATE'   // 文件夹对象数组
const FLODER_STATE_INCREMENT = 'FLODER_STATE_INCREMENT'		//-添加
const FLODER_STATE_SUBTRACT = 'FLODER_STATE_SUBTRACT'   // -删除

const FLODER_ACTIVE = 'FLODER_ACTIVE'   // 当前激活的文件夹
const FLODER_ACTIVE_FUN = 'FLODER_ACTIVE_FUN'
const FLODER_ACTIVE_BEFORE = 'FLODER_ACTIVE_BEFORE'  // 不激活这个文件夹

export default {
	namespaced: true,
  state: {
  	[ZINDEX]: 0,
  	[FLODER_STATE]:[],
  	[FLODER_ACTIVE]:[]  //激活的顺序
  },
  mutations: {
    [INCREMENT] (state) {
      state.ZINDEX ++
    },
    [FLODER_STATE_INCREMENT](state,obj){   // 增加文件夹对象
    	state.FLODER_STATE.push(obj);
    	state.FLODER_ACTIVE.push(obj);
    	console.log(state.FLODER_STATE,state.FLODER_ACTIVE)
    },
    [FLODER_STATE_SUBTRACT](state,obj){
    	state.FLODER_STATE.splice(state.FLODER_STATE.findIndex(item=>item==obj),1);  //找到下标，删除
    	state.FLODER_ACTIVE.splice(state.FLODER_ACTIVE.findIndex(item=>item==obj),1);  //找到下标，删除
    },
    [FLODER_ACTIVE_FUN](state,obj){
//  	state.FLODER_ACTIVE = obj;  //激活的文件夹
		state.FLODER_ACTIVE.splice(state.FLODER_ACTIVE.findIndex(item=>item==obj),1);  //找到下标，删除
		state.FLODER_ACTIVE.push(obj);   // 把激活的文件夹放到数组的最后一位
		
    },
    [FLODER_ACTIVE_BEFORE](state,obj){
    state.FLODER_ACTIVE.splice(state.FLODER_ACTIVE.findIndex(item=>item==obj),1);  //找到下标，删除
    state.FLODER_ACTIVE.unshift(obj);   // 把激活的文件夹放到数组的最前面
    
    }
  }
  //计算属性getters，在多个组件内可以复用，返回计算后的结果。
  //如果只在一个组件内使用，是可以不用getters的
//	getters:{
//		[FLODER_ACTIVE_WATCH]:function(state){
//	    	return state.FLODER_ACTIVE
//		}
//	}
}
