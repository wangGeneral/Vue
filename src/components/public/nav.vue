<template>
	<div class="nav">
		<ul>
			<router-link v-for="(nav,index) in navList" :to="{name:nav.navPath}" :key="index">
				<li>{{nav.navName}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navList:[
					{"navName":"首页","navPath":"index"},
					{"navName":"商品列表","navPath":"productList"},
					{"navName":"潮流新款","navPath":"newProduct"},
					{"navName":"火爆销售","navPath":"hotSales"},
					{"navName":"优惠特区","navPath":"specialOffer"},
					{"navName":"精品推荐","navPath":"recomdation"}
				],
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.nav{
		height: 40px;
		background: black;
		line-height: 40px;
		ul{
			margin: 0;
			padding: 0;
			display: flex;
			text-align: center;
			a{
				flex: 1;
				li{
					list-style: none;
					color: white;
				}
				li:hover{
					background: mediumpurple;
				}
			}
		}
	}
</style>