$(function(){
	// 为栏目绑定事件
	$("div.left_nav").on("click","a",function(){
		// this = event.currentTarget
		$("div.left_nav > a").removeClass("current");
		var con = $(this).html();
		$("#fuckyou").html(con);
		$(this).addClass("current");
		var url = $(this).attr("url");
		$("#wrapper").load(url);
	})
	$('#icon_home').click(function(){
		window.location.reload();
	})
});
