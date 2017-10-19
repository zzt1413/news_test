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
});

