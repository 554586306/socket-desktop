<template>
  <div class="hello">
  	<DesktopIcon @isOpen="isOpen"></DesktopIcon>
    <MenuBegin :isOpen="item"></MenuBegin>
  </div>
</template>

<script>
import MenuBegin from '@/components/menu-begin'
import DesktopIcon from '@/components/desktop-icon'
export default {
  name: 'Index',
  components:{
  	MenuBegin,
  	DesktopIcon
  },
  data () {
    return {
    	item:{}
    }
  },
  methods:{
  	isOpen(data){
  		this.item = data;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(../assets/img/arctic10.jpg) no-repeat ;
		background-size: cover;
		overflow: hidden;
	}
</style>
