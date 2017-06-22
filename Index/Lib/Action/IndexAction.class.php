<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
    	// p($_SERVER); 定义的一个p函数 用来更方便的解析数组
    	// say();       定义的一个say函数
    	//echo U("index/index",array("xiaobo"=>"123","sss"=>"789"),"",0,true);
    	//第三个参数是以什么结尾（.php,.html） 0代表不跳转 1代表跳转  true代表显示localtion
    	
    	// $this->display('Untitled-1');
    	// $s=$this->_get('xiaobo');     //  默认使用了htmlspecialchars()不会解析标签
    	//$s=$this->_post('xiaobo');
    	//$s=I("xiaobo","","htmlspecialchars");//取到的值不会解析标签  post/get
    	//dump($s);
    }
    public function del(){
    	echo "这里是index的删除方法";
    }
}