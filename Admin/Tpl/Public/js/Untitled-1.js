// JavaScript Document
window.onload = function(){
	//header 顶部
	var oUl = $('ul');
	var aLi = oUl.getElementsByTagName('li');
	var aLis = oUl.getElementsByClassName('list');
	var oLii = $('lii');
	var oMen = $('menu3');
	var aIm = oLii.getElementsByTagName('img')[0];
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.background = '';
			}
			this.style.background = '#fff';
			switch(this.index){
				case 0:
					aLis[0].style.display = 'block';
					break;
				case 1:
					
					break;
				case 2:
					aLis[1].style.display = 'block';
					break;
				case 3:
					
					break;
				case 4:
					aLis[2].style.display = 'block';
					break;
				case 5:
					aLis[3].style.display = 'block';
					break;
				default:
					aLis[4].style.display = 'block';	
			}		
		}
		aLi[i].onmouseout = function(){
			for(var i=0;i<aLis.length;i++){
				aLis[i].style.display = 'none';
			}
			this.style.background = '';
		}
		oLii.onmouseover = function(){
			aIm.src = 'img/5.png';
			this.style.background = '#fff';
			oMen.style.display = 'block';
		}
		oLii.onmouseout = function(){
			aIm.src = 'img/2.png';
			this.style.background = '';
			oMen.style.display = 'none';
		}
	}
	
	//搜索框
	var oSerch = $('search_js');
	var oList = $('list');
	var oBtniu =$('btn_niu');
	var aBtn = oBtniu.getElementsByTagName('div');
	var oInp =$('input');
	var oSr = oSerch.getElementsByClassName('search_btn')[0];
	
	oList.innerHTML = '<li><a href="javascript:;">新款连衣裙</a></li><li><a href="javascript:;">四件套</a></li><li><a href="javascript:;" style="color:#ff4200;">潮流T恤</a></li><li><a href="javascript:;">时尚女鞋</a></li><li><a href="javascript:;">短裤</a></li><li><a href="javascript:;">半身裙</a></li><li><a href="javascript:;">男士外套</a></li><li><a href="javascript:;">墙纸</a></li><li><a href="javascript:;">行车记录仪</a></li><li><a href="javascript:;">新款男鞋</a></li><li><a href="javascript:;">耳机</a></li>';
	
	aBtn[0].onclick = function(){
		oInp.placeholder = '淘宝DIY';
		oInp.style.borderColor = '';
		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className = '';
			aBtn[i].style.background = '';
	     }
		 oList.innerHTML = '<li><a href="javascript:;">新款连衣裙</a></li><li><a href="javascript:;">四件套</a></li><li><a href="javascript:;" style="color:#ff4200;">潮流T恤</a></li><li><a href="javascript:;">时尚女鞋</a></li><li><a href="javascript:;">短裤</a></li><li><a href="javascript:;">半身裙</a></li><li><a href="javascript:;">男士外套</a></li><li><a href="javascript:;">墙纸</a></li><li><a href="javascript:;">行车记录仪</a></li><li><a href="javascript:;">新款男鞋</a></li><li><a href="javascript:;">耳机</a></li>';
		
		this.className = 'onc';
		oSr.style.background = '';
	}
	aBtn[1].onclick = function(){
		oInp.placeholder = '原装进口全世界';
		oInp.style.borderColor = '#C40000';
		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className = '';
	     }
		
		 oList.innerHTML = '<li><a href="javascript:;">T恤女</a></li><li><a href="javascript:;" style="color:#C40000;">电风扇</a></li><li><a href="javascript:;">大码女装</a></li><li><a href="javascript:;" style="color:#C40000;">凉鞋</a></li><li><a href="javascript:;">防晒霜</a></li><li><a href="javascript:;">伞</a></li><li><a href="javascript:;" style="color:#C40000;">蚊帐</a></li><li><a href="javascript:;">行车记录仪</a></li><li><a href="javascript:;" style="color:#C40000;">运动鞋</a></li><li><a href="javascript:;">文胸</a></li><li><a href="javascript:;">洗衣液</a></li><li><a href="javascript:;" style="color:#C40000;">夏凉被</a></li><li><a href="javascript:;">短裤男</a></li><li><a href="javascript:;">女包</a></li>';
		this.className = 'onc';
		this.style.background = '#C40000';
		oSr.style.background = '#C40000';
	}
	aBtn[2].onclick = function(){
		oInp.placeholder = '';
		oInp.style.borderColor = '';
		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className = '';
			aBtn[i].style.background = '';
		}
		 oList.innerHTML = '<li><a href="javascript:;">新款连衣裙</a></li><li><a href="javascript:;">四件套</a></li><li><a href="javascript:;" style="color:#ff4200;">潮流T恤</a></li><li><a href="javascript:;">时尚女鞋</a></li><li><a href="javascript:;">短裤</a></li><li><a href="javascript:;">半身裙</a></li><li><a href="javascript:;">男士外套</a></li><li><a href="javascript:;">墙纸</a></li><li><a href="javascript:;">行车记录仪</a></li><li><a href="javascript:;">新款男鞋</a></li><li><a href="javascript:;">耳机</a></li>';
		this.style.background = '';
		this.className = 'onc';
		oSr.style.background = '';
	}
	//相机换图
	var oIma =$('imagep');
	oIma.onmouseover = function(){
		oIma.src = 'img/10.png';
	}
	oIma.onmouseout = function(){
		oIma.src = 'img/9.png';
	}
	
	
	//header结束
	
	//main开始
	
	//二级列表
	var oUt = $('ul_list');
	var aLu = oUt.getElementsByTagName('li');
	//alert(aLu.length);
	var aDis = oUt.getElementsByTagName('div');
	var arrIm = ['img/12(2).png','img/13(2).png','img/14(2).png','img/15(2).png','img/16(2).png','img/17(2).png','img/18(2).png','img/19(2).png','img/20(2).png','img/21(2).png','img/22(2).png','img/23(2).png','img/24(2).png','img/25(2).png','img/26(2).png','img/27(2).png'];
	var arrIm2 = ['img/12.png','img/13.png','img/14.png','img/15.png','img/16.png','img/17.png','img/18.png','img/19.png','img/20.png','img/21.png','img/22.png','img/23.png','img/24.png','img/25.png','img/26.png','img/27.png'];
	var aImgs = oUt.getElementsByClassName('posin');
	for(var i=0;i<aLu.length;i++){
		aLu[i].index = i;
		aLu[i].onmouseover = function(){	
		
			aDis[this.index].className = 'show_div';
			aDis[this.index].style.transition = 'all .2s linear';
			aImgs[this.index].src = arrIm[this.index];
		}
		aLu[i].onmouseout = function(){
			
			aDis[this.index].className = '';
			aImgs[this.index].src = arrIm2[this.index];
			
		}
	}
	
	//banner开始
	var oBan = $('banner');
	var oFig = $('figure_imgs');
	var oImga = oFig.getElementsByTagName('img');
	var oUu = oBan.getElementsByTagName('ul')[0];
	var aLias = oUu.getElementsByTagName('li');
	var oBt1 =$('btn1');
	var oBt2 = $('btn2');
	//var arrFi = ['0','-520','-1040','-1560','-2080'];
	var timer = null;
	var n=0;
	oFig.style.width = oImga[0].offsetWidth*oImga.length+'px';
	for(var i=0;i<aLias.length;i++){
		aLias[i].index = i;
		aLias[i].onclick = function(){
			n=this.index;
			toBut();
		}
	}
	timer = setInterval(auto,2500);
	function auto(){
		n++;
		n%=aLias.length;
		toBut();
	}
	oBan.onmouseover = function(){
		clearInterval(timer);
		oBt1.style.display = 'block';
		oBt2.style.display = 'block';
	}
	oBan.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(auto,2500);
		oBt1.style.display = 'none';
		oBt2.style.display = 'none';
	}
	oBt1.onclick = function(){
		n--;
		if(n==-1){
			n=aLias.length-1;
		}
		toBut();
	}
	oBt2.onclick = auto;
	function toBut(){
		for(var i=0;i<aLias.length;i++){
				aLias[i].className = '';
		}
		aLias[n].className = 'onclick_li';
		startMove('figure_imgs','left',-(n*oImga[0].offsetWidth));
	}
	
	//banner_down
	var oBanBor = $('banner_down');
	var oBanDown = $('down_x_ul');
	var aLiEle = oBanDown.getElementsByTagName('li');
	var oDownCon = $('down_con');
	var aIgDown = oDownCon.getElementsByTagName('img');
	var oBtnDod = $('btn_do');
	var aBtnDiv = oBtnDod.getElementsByTagName('div');
	var num = 0;
	var timer1 = null;
	var oBb = $('index_p');
	oBb.style.color = '#bf2c18';
	oDownCon.style.width = aIgDown[0].offsetWidth*aIgDown.length+'px';
	aLiEle[0].style.background = '#ff4b03';
	for(var i=0;i<aLiEle.length;i++){
		aLiEle[i].index = i;
		aLiEle[i].onclick = function(){
			num = this.index;
			prev();
		}
	}
	timer1 = setInterval(net,3000);
	function net(){
		num++;
		num%=aLiEle.length;
		prev();
	}
	aBtnDiv[0].onclick = function(){
		num--;
		if(num==-1){
			num = aLiEle.length-1;
		}
		prev();
	}
	aBtnDiv[1].onclick = net;
	oBanBor.onmouseover = function(){
		aBtnDiv[0].style.display = 'block';
		aBtnDiv[1].style.display = 'block';
		clearInterval(timer1);
	}
	oBanBor.onmouseout = function(){
		clearInterval(timer1);
		aBtnDiv[0].style.display = 'none';
		aBtnDiv[1].style.display = 'none';
		timer1 = setInterval(net,3000);
	}
	function prev(){
		for(var i=0;i<aLiEle.length;i++){
			aLiEle[i].style.background = '';
		}
		oBb.innerHTML = (num+1);
		startMove2('down_con','left',-num*aIgDown[0].offsetWidth);
		aLiEle[num].style.background = '#ff4b03';
	}
	
	//main_right_cen
	var oMainRight = $('main-right_cen');
	var oUlGet = $('ul_get_li');
	var aLiGet = oUlGet.getElementsByTagName('li');
	//alert(1)
	var aMainCon = oMainRight.getElementsByClassName('main_small_con');
	for(var i=0;i<aLiGet.length;i++){
		aLiGet[i].index = i;
		aLiGet[i].onmouseover = function(){
			for(var i=0;i<aLiGet.length;i++){
				aLiGet[i].className = 'li_small_child';
				aMainCon[i].style.display = 'none';
			}
			aMainCon[this.index].style.display = 'block';
			this.className = 'li_small_child onmouseover';
		}
	}
	
	//二维码小图标
	var oTipsGet = $('tips');
	var aNameImg = oTipsGet.getElementsByClassName('get');
	var aXuan = oTipsGet.getElementsByClassName('xuan_er');
	for(var i=0;i<aNameImg.length;i++){
		aNameImg[i].index = i;
		aNameImg[i].onmouseover = function(){
			for(var i=0;i<aNameImg.length;i++){
				aXuan[i].style.display = '';
			}
			aXuan[this.index].style.display = 'block';
		}
		aNameImg[i].onmouseout = function(){
			for(var i=0;i<aNameImg.length;i++){
				aXuan[i].style.display = '';
			}
		}
	}
	
	//话费小图标
	var oUlHua = $('ul_get_element');
	var aLiHua = oUlHua.getElementsByTagName('li');
	var oFloat = $('float_cheng');
	var aDivFloat = oFloat.getElementsByTagName('div');
	var oOffClose =$('off');
	for(var i=0;i<4;i++){
		aLiHua[i].index = i;
		aLiHua[i].onmouseover = function(){
			for(var i=0;i<4;i++){
				aLiHua[i].style.zIndex = '';
				aLiHua[i].style.borderColor = '';
				aDivFloat[i].style.display = '';
				aLiHua[i].style.borderBottom = '2px solid #fff';
				aLiHua[i].getElementsByTagName('p')[0].style.color = '';
			}
			this.style.zIndex = '999';
			this.style.borderColor = '#fb4402';
			this.style.borderBottom = '2px solid #fff';
			this.getElementsByTagName('p')[0].style.color = 'red';
			aDivFloat[this.index].style.display = 'block';
			oOffClose.style.display = 'block';
		}
	}
	oOffClose.onclick = function(){
		for(var i=0;i<4;i++){
				aLiHua[i].style.zIndex = '';
				aLiHua[i].style.borderColor = '';
				aDivFloat[i].style.display = '';
				aLiHua[i].style.borderBottom = '2px solid #fff';
				this.style.display = 'none';
				aLiHua[i].getElementsByTagName('p')[0].style.color = '';
		}
	}
	//main结束
	
//	淘宝头条
	var oImport = $('import');
	var aLiaPort = oImport.getElementsByTagName('li');
	oImport.style.height = aLiaPort[0].offsetHeight*aLiaPort.length+'px';
	var arrMar = ['0px','-60px','-120px'];
	var timers = null;
	var number = 0;
	timers = setInterval(jishi,2000);
	function jishi(){
		number++;
		if(number == arrMar.length){
			number=0;
		}
		oImport.style.top = arrMar[number];
	}
	oImport.onmouseover = function(){
		clearInterval(timers);
	}
	oImport.onmouseout = function(){
		timers = setInterval(jishi,2000);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}