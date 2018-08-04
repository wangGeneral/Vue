<template>
	<div class="register">
		<header-vue :show="showBg"></header-vue>
		<div class="content">
			<div class="midForm">
    			<form class="form-horizontal" role="form">
					<fieldset>
						<legend>欢迎开启注册旅程</legend>
						<div class="form-group">
							<label for="userN" class="col-xs-2 control-label">姓名</label>
							<div class="col-xs-10">
								<input type="text" class="form-control" id="userN" v-model="username" />
							</div>
						</div>
						<div class="form-group">
							<label for="userP" class="col-xs-2 control-label">密码</label>
							<div class="col-xs-10">
								<input type="password" class="form-control" id="userP" v-model="userpwd" />
							</div>
						</div>
						<div class="form-group">
							<label for="userP" class="col-xs-2 control-label">电话</label>
							<div class="col-xs-10">
								<input type="text" class="form-control" id="userT" v-model="usertel" />
							</div>
						</div>
						<div class="form-group">
							<label for="userS" class="col-xs-2 control-label">地址</label>
							<div class="col-xs-10">
								<select class="form-control" v-model="useradd">
									<option>河南省</option>
									<option>湖北省</option>
									<option>广东省</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="userS" class="col-xs-2 control-label">性别</label>
							<div class="col-xs-10">
								<label class="radio-inline col-xs-3 col-xs-offset-1">
									<input type="radio" name="gen" value="male" v-model="usergen" />男
								</label>
								<label class="radio-inline col-xs-3 ">
									<input type="radio" name="gen" value="female" v-model="usergen" />女
								</label>
								<label class="radio-inline col-xs-3 ">
									<input type="radio" name="gen" value="secrecy" v-model="usergen" />保密
								</label>
							
							</div>
						</div>
						<div class="form-group">
							<label for="userS" class="col-xs-2 control-label">爱好</label>
							<div class="col-xs-10">
								<label class="checkbox-inline col-xs-3 col-xs-offset-1">
									<input type="checkbox" name="hobby" value="basketball" />篮球
								</label>
								<label class="checkbox-inline col-xs-3 ">
									<input type="checkbox"  name="hobby" value="football" />足球
								</label>
								<label class="checkbox-inline col-xs-3 ">
									<input type="checkbox"  name="hobby" value="baseball" />棒球
								</label>
							
							</div>
						</div>
						<div class="form-group">
							<label for="userS" class="col-xs-2 control-label">协议</label>
							<div class="col-xs-10">
								<textarea class="form-control" rows="3" readonly="readonly">未满十八岁禁止入内</textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="userS" class="col-xs-6  control-label">
								<input type="checkbox" />同意该协议
							</label>
						</div>
						<div class="form-group">
							<a href="#" class="btn btn-block btn-success btn-lg" @click="getSubmit()">注册</a>
						</div>
					</fieldset>
				</form>
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
				username:'',
				userpwd:'',
				usertel:'',
				useradd:'',
				usergen:'',
				userhobby:[]
			}
		},
		methods:{
			getSubmit(){
				var userIdList=[];
				var userId=Math.round(Math.random()*100);
				if (userIdList.indexOf(userId)!=-1) {
					event.target.href="#/register";
				}else{
					userIdList.push("userId");
					var user={};
					user.userId=userId;
					user.userName=this.username;
					user.userPwd=this.userpwd;
					user.userTel=this.usertel;
					user.userAdd=this.useradd;
					user.userGen=this.usergen;
					user.userHobby=this.userhobby;
					userService.addUser(user);
					alert("注册成功！");
					event.target.href="#/login";
				}
			}
		}
	}
</script>

<style>
	.midForm{
		width: 800px;
		margin: 0 auto;
	}
</style>