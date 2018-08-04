<template>
	<div class="list">
		<div class="picList">
			<figure v-for="img in imgList">
				<router-link :to="{name:'details',query:{id:img.proId}}"><img :src="img.proUrl" :title="img.proName"/></router-link>
				<figcaption>{{img.proName}}</figcaption>
			</figure>
		</div>
		<div class="pagers">
			<span>总共{{totalPage}}页</span>
			<span>当前第{{currentPage}}页</span>
			<span @click="prevPage">上一页</span>
			<span @click="nextPage">下一页</span>
		</div>
	</div>
</template>

<script>
	import pageService from "../data/pagerService.js";
	export default{
		data(){
			return{
				imgList:[],
				currentPage:1,
				totalPage:1
			}
		},
		created(){
			this.$AJAX.get("http://localhost:2222/src/components/data/products.json").then((data)=>{
				var list=data.data.filter((item)=>{
					return item[this.content]==1;
				})
				pageService.list=list;
				this.totalPage=pageService.totalPage(list);
				this.imgList=pageService.firstPage(this.currentPage,list);
			})
		},
		methods:{
			nextPage() {
				this.currentPage++;
				if (this.currentPage>this.totalPage) {
					alert("已经是最后一页了！");
					this.currentPage=this.totalPage;
				}
				this.imgList=pageService.nextPage(this.currentPage,pageService.list);
			},
			prevPage() {
				this.currentPage--;
				if (this.currentPage<1) {
					alert("已经是第一页了！");
					this.currentPage=1;
				}
				this.imgList=pageService.prevPage(this.currentPage,pageService.list);
			}
		},
		props:["content"]
	}
</script>

<style scoped lang="less">
	.list{
		height: 650px;
		.picList{
			height: 600px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			figure{
				flex: 1;
				height: 250px;
				width: 230px;
				img{
					height: 250px;
					width: 230px;
				}
				figcaption{
					text-align: center;
				}
			}
			figure:hover{
				figcaption{
					color: red;
				}
			}
		}
		.pagers{
			height: 50px;
			background: orange;
			text-align: center;
			line-height: 50px;
		}
	}
</style>