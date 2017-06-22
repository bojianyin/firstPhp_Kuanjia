//获取元素id
function $(id){
	return document.getElementById(id);
}
// 补零
function toDub(n){
	return n<10? '0'+n : ''+n;
}
//运动框架1
function move(id,target){
	var timer = null;
	var oFr = $(id);
	var iSpeed = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		if(oFr.offsetLeft<target){
			iSpeed = 10;
		}else{
			iSpeed = -10;
		}
		if(oFr.offsetLeft==target){
			clearInterval(timer);
		}else{
			oFr.style.left = oFr.offsetLeft+iSpeed+'px';
		}
	},20)
}
// 运动框架2
function mover(obj,sName,target,time){
		//距离
		var dis = target - parseInt(getStyle(obj,sName));
		//总次数
		var count = Math.floor(time/30);
		//当前次数
		var n = 0;
		//起点
		var start = parseInt(getStyle(obj,sName));
		
		var timer = setInterval(function(){
			n++;
			obj.style[sName] = start+dis*n/count+'px';	
			if(n == count){
				clearInterval(timer);
			}
		},30);
		
}
//通道透明
function Alpha(id,target){
	var timer = null;
	var oImg = $(id);
	var speed = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		if(alpha<target){
			speed = 1;
		}else{
			speed = -1;
		}
		if(alpha==target){
			clearInterval(timer);
		}else{
			alpha+=speed;
			oImg.style.opacity = alpha/100;
			oImg.style.filter = 'alpha(opacity:'+alpha+')';
			//document.title = alpha;
		}
	},20)
}

// 焦点图通用框架
		function getStyle(obj,name)
		{
			if(obj.currentStyle)
			{
				return obj.currentStyle[name]
			}
			else
			{
				return getComputedStyle(obj,false)[name]
			}
		}
		
		function startMove(id,att,add)
		{
			var obj = $(id);
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){
			   var cutt = 0 ;
			   if(att=='opacity')
			   {
				   cutt = Math.round(parseFloat(getStyle(obj,att)));
			   }
			   else
			   {
				   cutt = Math.round(parseInt(getStyle(obj,att)));
			   }
			   var speed = add-cutt;
			   speed = speed>0?Math.ceil(speed):Math.floor(speed);
			   if(cutt==add)
			   {
				   clearInterval(obj.timer)
			   }
			   else
			   {
				   if(att=='opacity')
				   {
					   obj.style.opacity = (cutt+speed)/100;
					   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
				   }
				   else
				   {
					   obj.style[att] = cutt+speed+'px';
				   }
			   }
			   
			},10)
		}
		
		function startMove2(id,att,add)
		{
			var obj = $(id);
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){
			   var cutt = 0 ;
			   if(att=='opacity')
			   {
				   cutt = Math.round(parseFloat(getStyle(obj,att)));
			   }
			   else
			   {
				   cutt = Math.round(parseInt(getStyle(obj,att)));
			   }
			   var speed = (add-cutt)/8;
			   speed = speed>0?Math.ceil(speed):Math.floor(speed);
			   if(cutt==add)
			   {
				   clearInterval(obj.timer)
			   }
			   else
			   {
				   if(att=='opacity')
				   {
					   obj.style.opacity = (cutt+speed)/100;
					   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
				   }
				   else
				   {
					   obj.style[att] = cutt+speed+'px';
				   }
			   }
			   
			},10)
		}
