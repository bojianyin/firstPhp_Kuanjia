<?php
$config=array(
	//'配置项'=>'配置值'
	'TMPL_PARSE_STRING'=>array(
		'__PUBLIC__'=>__ROOT__.'/'.APP_NAME.'/Tpl/Public',
	)
);
return array_merge(include("./Conf/config.php"),$config);
?>