
//动态加载事件函数
function addloadEvent(func){
	var oldonload =window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
} 

// 显示框
function linkAct(){
	if(!document.getElementById) return false;
	if(!document.getElementById("popup_menu")) return false;
	if(!document.getElementById("main_nav")) return false;
	if(!document.getElementById("menu_content")) return false;

	var main_nav = document.getElementById("main_nav");
	var popup_menu = document.getElementById("popup_menu");
	var menu_content = document.getElementById("menu_content");
	var user_remind = document.getElementById("user_remind");
	var user_tubiao = document.getElementById("user_tubiao");
	var user1 = document.getElementById("user1");

	main_nav.onmouseover = function(){
		popup_menu.style.visibility = "visible";
	}
	main_nav.onmouseout =function(){
		popup_menu.style.visibility = "hidden";
	}
	
	popup_menu.onmouseover = function(){
		popup_menu.style.visibility = "visible";
	}
	popup_menu.onmouseout =function(){
		popup_menu.style.visibility = "hidden";
	}
	
	user1.onmouseover = function(){
		user_remind.style.visibility = "visible";
	}
	user1.onmouseout =function(){
		user_remind.style.visibility = "hidden";
	}
	
	user_tubiao.onmouseover = function(){
		user_remind.style.visibility = "visible";
	}
	user_tubiao.onmouseout =function(){
		user_remind.style.visibility = "hidden";
	}

	user_remind.onmouseover = function(){
		user_remind.style.visibility = "visible";
	}
	user_remind.onmouseout =function(){
		user_remind.style.visibility = "hidden";
	}
}

var top_search2=document.getElementById("top_search1");
top_search2.onclick =function(){
	alert("暂未开放，敬请期待哦~");
}

//点击轮播图函数
function lunbo(){
	if(!document.getElementById) return false;
	if(!document.getElementsByClassName) return false;
	if(!document.getElementsByClassName("item_jieshao")) return false;
	if(!document.getElementById("lunbo_pics")) return false;

	var lunbo_pics = document.getElementById("lunbo_pics");
	var item_jieshaos = document.getElementsByClassName("item_jieshao");
	item_jieshaos[0].onmouseover = function(){
			moveElement(lunbo_pics,0,10);
	 }
	item_jieshaos[1].onmouseover = function (){
		moveElement(lunbo_pics,-820,10);
	}
	item_jieshaos[2].onmouseover = function (){
		moveElement(lunbo_pics,-820*2,10);
	}
	item_jieshaos[3].onmouseover = function (){
		moveElement(lunbo_pics,-820*3,10);
	}
	item_jieshaos[4].onmouseover = function (){
		moveElement(lunbo_pics,-820*4,10);
	}
}

function moveElement(element,final_x,interval){
	if(!document.getElementById) return false;
	var elem = document.getElementById("lunbo_pics")
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var dist=0;
		if(xpos==final_x){
			return true;
		}
		if(xpos>final_x){
			dist = Math.ceil((xpos-final_x)/10);
			xpos = xpos-dist;
		}
		if(xpos<final_x){
			dist = Math.ceil((final_x-xpos)/10);
			xpos = xpos+dist;
		}
		elem.style.left = xpos + 'px';
		var repeat = "moveElement('"+element+"',"+final_x+","+interval+")";
		elem.movement =setTimeout(repeat,interval);
}

// function index()

// 皮肤显示函数
function show2(){
	if(!document.getElementById) return false;
	var pic_links = document.getElementsByClassName("pic_link");
	var black=document.getElementsByClassName("black");
	for(var i=0;i<pic_links.length;i++){
		pic_links[i].index= i;
		pic_links[i].onmouseover = function a(){
				black[this.index].style.visibility = "visible";
		}
		pic_links[i].onmouseout = function a(){
				black[this.index].style.visibility = "hidden";
		}
	}
}

// 视频显示区域
function videoShow(){
	if(!document.getElementsByClassName) return false;
	var as = document.getElementsByClassName("video_link");
	var bg2s = document.getElementsByClassName("bg2");
	var jiantous = document.getElementsByClassName("jiantou")
	for(var i=0;i<as.length;i++){
		as[i].index= i;
		as[i].onmouseover = function(){
			bg2s[this.index].style.visibility = "visible";
			jiantous[this.index].style.visibility = "visible";
		}
		as[i].onmouseout = function(){
			bg2s[this.index].style.visibility = "hidden";
			jiantous[this.index].style.visibility = "hidden";
		}
	}
}

function zidong(){
	var lunbo_pics = document.getElementById("lunbo_pics");
	if(!lunbo_pics.style.left)
		lunbo_pics.style.left = "0px";
	var xpos = parseInt(lunbo_pics.style.left);
	if(xpos==-3280)
	{
		xpos=0;
	}
	else
	{
	xpos = xpos -820;
	}
	lunbo_pics.style.left = xpos + 'px';
}
setInterval("zidong()",5000);


addloadEvent(videoShow);
addloadEvent(show2);
addloadEvent(lunbo);
addloadEvent(linkAct);