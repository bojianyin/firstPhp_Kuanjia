<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
		// $db=M("save");
    	echo C('DB_HOST');
    	//dump($db);
    	//dump($db->select());
    }
    public function del(){
    	echo "这里是index的删除方法";
    }
}