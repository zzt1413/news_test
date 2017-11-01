$(document).ready(function() {
	$(".zhangkai_fenlei").hide();
	$(".jiahao").click(function(){
		$(".zhangkai_fenlei").toggle();
	});
	$(".tupian1").hide();
	$(".a1").mousemove(function(){
		$(".tupian1").show();
	});
	$(".a1").mouseleave(function(){
		$(".tupian1").hide();
	});
	$(".tupian11").hide();
	$(".a11").mousemove(function(){
		$(".tupian11").show();
	});
	$(".a11").mouseleave(function(){
		$(".tupian11").hide();
	});
	window.onscroll = function(){
		var distance = document.documentElement.scrollTop || document.body.scrollTop; //距离页面顶部的距离
		if( distance >= 100 ) { //当距离顶部超过300px时，显示图片
			document.getElementById('huidao_dingbu').style.display = "";
		} 
		else { //距离顶部小于300px，隐藏图片
			document.getElementById('huidao_dingbu').style.display = "none";
		}
		var toTop = document.getElementById("huidao_dingbu"); //获取图片所在的div
		toTop.onclick = function(){ //点击图片时触发的点击事件
			document.documentElement.scrollTop = document.body.scrollTop = 0; //页面移动到顶部
		}
		}
});




