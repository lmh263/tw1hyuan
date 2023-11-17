/**
 * 游戏全局配置
 */
//console.log("load config...");

/** 
 * 网络连接设置
 * @type {{host: string, port: number}}
 */
define(function(require, exports, module) {
	window.location.host == '192.168.64.2' ? curHost = '3x2r5.cn' : curHost = window.location.host;
	var net = {
		host: localStorage.getItem("hostip"),
		port: parseInt(localStorage.getItem("hostport")),
		codeUrl: BaseUrl+'/tw/getsms?',
		bindPhoneUrl: BaseUrl+'/tw/checksms?',
	};
	module.exports = {
		net: net,
	};
});