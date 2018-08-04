<template>
	<div class="header">
		<div class="top">
			<router-link :to="{name:'login'}" v-show="showBg"><span class="glyphicon glyphicon-user"></span>{{userName}}</router-link>
			<router-link :to="{name:'register'}" v-show="showBg"><span class="glyphicon icon-zhuce"></span>注册</router-link>
		</div>
		<div class="bottom">adidas</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showBg:true
			}
		},
		mounted(){
			this.showBg=this.show==false?false:true;
		},
		props:["icon","show","userName"]
	}
</script>

<style scoped lang="less">
	.header{
		height: 80px;
		background: pink;
		.top{
			height: 30px;
			text-align: right;
			line-height: 30px;
			a{
				margin-right: 10px;
			}
		}
		.bottom{
			height: 50px;
			font-size: 30px;
			text-align: center;
		}
	}
</style>