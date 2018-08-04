<template>
	<div class="details">
		<header-vue></header-vue>
		<div class="content">
			<div class="smallBox">
				<div class="shadow"></div>
				<img :src="img.proUrl" class="smallImg" />
			</div>
			<div class="largeBox"><img :src="img.proUrl" class="largeImg" /></div>
		</div>
		<footer-vue></footer-vue>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img:''
			}
		},
		created(){
			var id=this.$route.query.id;
			this.$AJAX.get("http://localhost:2222/src/components/data/products.json").then((data)=>{
				this.img=data.data.filter((item)=>{
					return item.proId==id;
				})[0]
			})
		},
		mounted(){
			var $=function (arg) {
				return document.querySelector(arg);
			}
			var shadow=$(".shadow");
			var smallBox=$(".smallBox");
			var largeBox=$(".largeBox");
			var content=$(".content");
			var largeImg=$(".largeImg");
			smallBox.onmouseenter=function () {
				shadow.style.visibility="visible";
				largeBox.style.visibility="visible";
			}
			smallBox.onmouseleave=function () {
				shadow.style.visibility="hidden";
				largeBox.style.visibility="hidden";
			}
			smallBox.onmousemove=function (ev) {
				var shadowLeft=ev.pageX-shadow.offsetWidth/2-content.offsetLeft;
				var shadowTop=ev.pageY-shadow.offsetHeight/2-content.offsetTop;
				if (shadowLeft<0) {
					shadowLeft=0;
				}
				if (shadowTop<0) {
					shadowTop=0;
				}
				if (shadowLeft+shadow.offsetWidth>=smallBox.offsetWidth) {
					shadowLeft=smallBox.offsetWidth-shadow.offsetWidth;
				}
				if (shadowTop+shadow.offsetHeight>=smallBox.offsetHeight) {
					shadowTop=smallBox.offsetHeight-shadow.offsetHeight;
				}
				shadow.style.left=shadowLeft+'px';
				shadow.style.top=shadowTop+'px';
				var bigImgLeft=shadowLeft*(largeImg.offsetWidth-largeBox.offsetWidth)/100;
				var bigImgTop=shadowTop*(largeImg.offsetHeight-largeBox.offsetHeight)/100;
				largeImg.style.left=-bigImgLeft+'px';
				largeImg.style.top=-bigImgTop+'px';
			}
		}
	}
</script>

<style scoped lang="less">
	.content{
		position: relative;
		height: 400px;
		width: 400px;
		margin: 0 auto;
		.smallBox{
			width: 200px;
			height: 200px;
			position: relative;
			.shadow{
				width: 100px;
				height: 100px;
				background: orange;
				opacity: .3;
				position: absolute;
				visibility: hidden;
			}
			img{
				width: 200px;
				height: 200px;
			}
		}
		.largeBox{
			width: 400px;
			height: 400px;
			position: absolute;
			left: 200px;
			top: 0;
			visibility: hidden;
			overflow: hidden;
			img{
				position: absolute;
				width: 800px;
				height: 800px;
			}
		}
	}
</style>