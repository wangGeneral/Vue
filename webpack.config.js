"use strict";
const path=require("path");
const htmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
	entry:{
		main:"./src/main.js"
	},
	output:{
		path:path.join(__dirname,"dist"),
		filename:"bundle.js"
	},
	module:{
		loaders:[
		   {
			   	test:/\.css$/,
			   	loader:"style-loader!css-loader!autoprefixer-loader"
		   },{
			   	test:/\.less$/,
			   	loader:"style-loader!css-loader!autoprefixer-loader!less-loader"
		   },{
			   	test:/\.(jpg|png|svg|ttf|woff|woff2|gif|jpeg)$/,
			   	loader:"url-loader",
			   	options:{
			   		limit:4092,
			   		name:"[name].[ext]"
			   	}
		   },{
			   	test:/\.js$/,
			   	loader:"babel-loader",
			   	exclude:/node_modules/,
			   	options:{
			   		presets:["env"],
			   		plugins:["transform-runtime"]
			   	}
		   },{
			   	test:/\.vue$/,
			   	loader:"vue-loader"

		   }
		
		]
	},
	plugins:[
	   new htmlWebpackPlugin({
	   	  template:"./src/index.html"
	   })
	
	]
	
	
	
}
