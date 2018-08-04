<template>
	<div class="index">
		<header-vue :userName="userName"></header-vue>
		<nav-vue></nav-vue>
		<div class="banner">
			<mt-swipe :auto="4000">
				<mt-swipe-item class="slide" v-for="img in imgList">
					<img :src="img"/>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<footer-vue></footer-vue>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgList:[
					"src/img/3c3d31b9238647eb8e1d162d1bc70c86_th.jpeg",
					"src/img/BTGR.jpg",
					"src/img/fgh.jpg"
				],
				userName:""
			}
		},
		mounted(){
			var userName=sessionStorage.getItem("userName");
			if (userName!=null) {
				this.userName=userName;
			}else{
				this.userName="登录";
			}
		}
	}
</script>

<style scoped lang="less">
	.index{
		.banner{
			height: 750px;
			.mint-swipe{
				height: 750px;
				img{
					height: 100%;
					width: 100%;
				}
			}
		}
	}
</style>