<template>
	<div class="login">
		<header-vue :show="showBg"></header-vue>
		<div class="content">
			<div class="midForm">
	    		<fieldset>
					<legend>请登录</legend>
					<form action="#">
						<div class="form-group">
						  <div class="input-group col-xs-10 col-xs-offset-1 input-group-lg">
						  	  <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
			           		 <input type="text" class="form-control" placeholder="请输入用户名" v-model="userName"/>
						  </div>
						</div>
						<div class="form-group">
						  <div class="input-group col-xs-10 col-xs-offset-1  input-group-lg">
						  	  <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
			           		 <input type="password" class="form-control" placeholder="请输入密码" v-model="userPwd">
						  </div>
						</div>
						<div class="form-group">
						  <div class="input-group col-xs-10 col-xs-offset-1  input-group-lg">
						  	  <span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
			           		 <input type="tel" class="form-control" placeholder="请输入手机号码" v-model="tel">
						  </div>
						</div>
						<div class="form-group">
						  <div class="input-group col-xs-10 col-xs-offset-1  input-group-lg">
			           		 <a class="btn btn-success btn-block" @click="login()" href="#">登录</a>
						  </div>
						</div>
					</form>
				</fieldset>
	    	</div>
		</div>
		<footer-vue></footer-vue>
	</div>
</template>

<script>
	import userService from "../data/userService.js";
	export default{
		data(){
			return{
				showBg:false,
				userName:"",
				userPwd:"",
				tel:""
			}
		},
		methods:{
			login(){
				var f=false;
				userService.getList.forEach((item)=>{
					if (item.userName==this.userName && item.userPwd==this.userPwd) {
						f=true;
					}
				})
				if (f) {
					event.target.href="#/index";
					sessionStorage.setItem("userName",this.userName)
				}else{
					event.target.href="#/login";
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		height: 420px;
	}
	.midForm{
		width: 800px;
		margin: 0 auto;
	}
</style>