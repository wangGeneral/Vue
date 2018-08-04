function pageService () {
	this.firstPage=function (num,arr) {
		return arr.filter(function (item,index) {
			return index>=num*12-12 && index<=num*12-1;
		})
	}
	this.totalPage=function (arr) {
		return Math.ceil(arr.length/12);
	}
	this.nextPage=function (num,arr) {
		return arr.filter(function (item,index) {
			return index>=num*12-12 && index<=num*12-1;
		})
	}
	this.prevPage=function (num,arr) {
		return arr.filter(function (item,index) {
			return index>=num*12-12 && index<=num*12-1;
		})
	}
	this.list={};
}
var o=new pageService();
export default o;
