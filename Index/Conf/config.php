<?php
$config = array(
	//'配置项'=>'配置值'
	'LOAD_EXT_FILE'=>'function'  //加载名为function的say函数
	
	,'URL_MODEL'=>1          //路径函数U() 1代表path_info方法  2代表传统的get传参方法
	,'URL_HTML_SUFFIX'=>'html'
);
return array_merge(include("./Conf/config.php"),$config);
?>