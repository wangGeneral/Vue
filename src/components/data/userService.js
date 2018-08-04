function userService () {
	var userList=[
		{"userId":"u001","userName":"wss","userPwd":"123456","userTel":"17607550844","userAdd":"贵州","userGen":"男"}
	];
	this.addUser=function (obj) {
		userList.push(obj);
	}
	this.getList=userList;
}
var u=new userService();
export default u;