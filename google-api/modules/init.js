window.google = window.google || {};
google.maps = google.maps || {};
(function() {
	// 动态加载script
	function getScript(src) {
		document.write('<script src="'+ src +'" type="text/javascript"></script>');
	}
	// 模块仓库
	var modules = google.maps.modules = {};
	google.maps.__gjsload__ = function(name, text) {
		modules[name] = text;
	};
	
	// 初始化需要的环境变量
	google.maps.Load = function(apiLoad) {
		delete google.maps.Load;
		apiLoad([null,[[["https://mts0.googleapis.com/vt?lyrs=m@187000000\u0026src=api\u0026hl=zh-CN\u0026","https://mts1.googleapis.com/vt?lyrs=m@187000000\u0026src=api\u0026hl=zh-CN\u0026"],null,null,null,null,"m@187000000"],[["https://khms0.googleapis.com/kh?v=118\u0026hl=zh-CN\u0026","https://khms1.googleapis.com/kh?v=118\u0026hl=zh-CN\u0026"],null,null,null,1,"118"],[["https://mts0.googleapis.com/vt?lyrs=h@187000000\u0026src=api\u0026hl=zh-CN\u0026","https://mts1.googleapis.com/vt?lyrs=h@187000000\u0026src=api\u0026hl=zh-CN\u0026"],null,null,"imgtp=png32\u0026",null,"h@187000000"],[["https://mts0.googleapis.com/vt?lyrs=t@129,r@187000000\u0026src=api\u0026hl=zh-CN\u0026","https://mts1.googleapis.com/vt?lyrs=t@129,r@187000000\u0026src=api\u0026hl=zh-CN\u0026"],null,null,null,null,"t@129,r@187000000"],null,[[null,0,7,7,[[[330000000,1246050000],[386200000,1293600000]],[[366500000,1297000000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026"]],[null,0,8,8,[[[330000000,1246050000],[386200000,1279600000]],[[345000000,1279600000],[386200000,1286700000]],[[354690000,1286700000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026"]],[null,0,9,9,[[[330000000,1246050000],[386200000,1279600000]],[[340000000,1279600000],[386200000,1286700000]],[[348900000,1286700000],[386200000,1302000000]],[[368300000,1302000000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026"]],[null,0,10,19,[[[329890840,1246055600],[386930130,1284960940]],[[344646740,1284960940],[386930130,1288476560]],[[350277470,1288476560],[386930130,1310531620]],[[370277730,1310531620],[386930130,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=zh-CN\u0026"]],[null,3,7,7,[[[330000000,1246050000],[386200000,1293600000]],[[366500000,1297000000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026"]],[null,3,8,8,[[[330000000,1246050000],[386200000,1279600000]],[[345000000,1279600000],[386200000,1286700000]],[[354690000,1286700000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026"]],[null,3,9,9,[[[330000000,1246050000],[386200000,1279600000]],[[340000000,1279600000],[386200000,1286700000]],[[348900000,1286700000],[386200000,1302000000]],[[368300000,1302000000],[386200000,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026"]],[null,3,10,null,[[[329890840,1246055600],[386930130,1284960940]],[[344646740,1284960940],[386930130,1288476560]],[[350277470,1288476560],[386930130,1310531620]],[[370277730,1310531620],[386930130,1314843700]]],["https://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026","https://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=zh-CN\u0026"]]],[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=63\u0026hl=zh-CN\u0026","https://khms1.googleapis.com/kh?v=63\u0026hl=zh-CN\u0026"],null,null,null,null,"63"],[["https://mts0.googleapis.com/mapslt?hl=zh-CN\u0026","https://mts1.googleapis.com/mapslt?hl=zh-CN\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=zh-CN\u0026","https://mts1.googleapis.com/mapslt/ft?hl=zh-CN\u0026"]],[["https://mts0.googleapis.com/vt?hl=zh-CN\u0026","https://mts1.googleapis.com/vt?hl=zh-CN\u0026"]]],["zh-CN","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com"],["https://maps.gstatic.com/intl/zh_cn/mapfiles/api-3/9/16","3.9.16"],[2725080515],1.0,null,null,null,null,0,"",null,null,1,"https://khms.googleapis.com/mz?v=118\u0026",null,"https://earthbuilder.google.com","https://earthbuilder.googleapis.com"], loadScriptTime);
	};
	
	var loadScriptTime = (new Date).getTime();
	// 自动加载
	//getScript("https://maps.gstatic.com/intl/zh_cn/mapfiles/api-3/9/16/main.js");
  	
	//手动加载本地js
	var script = [
		'main.js',
		//'common.js',
		//'map.js',
		//'util.js',
		//'onion.js',
		//'stat.js',
		//'controls.js',
		//'marker.js'
	];
	for(var i=0;i<script.length;i++){
		getScript('./modules/'+script[i]);
	}
})();