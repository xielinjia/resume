// 底部点击轮播————

$(function(){
	$(".next").click(function(){
		var list = $(".itemWrap")
		for(var i=0;i<list.length;i++){
			if($(list[i]).hasClass("active")){
				$(list[i]).removeClass("active")
				if(i==list.length-1){
					$(list[0]).addClass("active")
				}else{
					$(list[i+1]).addClass("active")
				}
				return;
			}
		}
	})
})
