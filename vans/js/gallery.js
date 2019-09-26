$(function(){

	$(".banner_right").click(function(){
		var DIV = $(".selected-sort");
		if(DIV.css("display")=="none"){
			DIV.slideDown("fast");
		}else{
			DIV.slideUp("fast");
		}
	});
	
	$(".selected-sort a").click(function(){
		var txt = $(this).text();
		// $(".selected-sort").html(txt);
		// var value = $(this).attr("data-sort");
		// $(".selected-sort").hide();
        $(".right_box>span").html(txt);
        $(".selected-sort a").removeClass("active");
        $(this).addClass("active");
	});

});

/* 左边选项栏--------- */
$(function(){
	
	$(".gallery_filter dl>dt").click(function(){
		var $dts = $(".gallery_filter dl>dt")
		var $index = $dts.index($(this))
		var $dd = $(".gallery_filter dl>dd")
		var $span=$(".gallery_filter dl>dt>span")
		if($dd.eq($index).css("display")=="none"){
			$dd.eq($index).slideDown("fast")
			// $dd.eq($index).slideDown("fast").parent().siblings().children(":last-child").slideUp("fast");
			$span.eq($index).addClass("active")
			// $span.eq($index).addClass("active").parent().parent().siblings().children().children(":last-child").removeClass("active")
		}else{
			$dd.eq($index).slideUp("fast")
			$span.eq($index).removeClass("active")
		}
		// console.log($dd1)
		// // ").nextSibling("dd");
		// if($dd.css("display")=="none"){
		// 	$dd.slideDown("fast");
		// 	// $(this).parent().next().lastChile().$dd.slideUp("fast")
		// }else{
		// 	$dd.slideUp("fast")
			
		// }
	});
});

$(function(){
	
	$(".filter_lists dl>dd>span>a").click(function(){
		if ( $(this).hasClass("active") ){
			$(this).removeClass("active");
		}else{$(this).addClass("active");}
	});
});


// $(function(){
// 	var $DIV=$(".main>.gallery_show ul>li>div.goods_pic>a:nth-child(1)");
// 	var $index = $DIV.index($(this))
// 	$DIV.hover(function(){
// 		$DIV.eq($index).children().children(":last-child").css("z-index")==3
// 	});
// });



// 加载更多loadmore---
$(function () {
	var txt ='没有更多了';
    $("li.goods_item").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("li.goods_item:hidden").slice(0, 3).slideDown();
        if ($("li.goods_item:hidden").length == 0) {
			// $("#loadMore").fadeOut('slow');
			$("#loadMore").html(txt);
		}
	})
});


$(function () {
	// var n = parseInt(Math.floor(Math.random()*100));
	// console.log(n)

	// Math.floor(100000 + Math.random() * 900000)
	// var $dts = $(".goods_item>.goods_pic>a>.img1")
	// var index = $dts.index($(this))
	
    $(".img1").hover(function(e){
	  var alt=$(e.target).attr("alt");
      var src=$(e.target).attr("src");
      $(e.target).attr("src",alt);
      $(e.target).attr("alt",src);
    })


	
});

// 底部点击轮播————
$(function () {
	var lb=$(".maxContent"),
	lb_cur=1,
	lb_w=lb.find(".itemWrap").width();
	lb_timer=null;
	lb_timer = null;
	t=1;

	function showProducts(){
		//轮播列表图切换
		if(lb_cur < 1){
			lb_cur = 3;
		} else if(lb_cur > 3){
			lb_cur = 1;
		}
	}
	lb_timer = setInterval(function(){
		lb_cur++;
		showProducts();
	}, 4000);
	$("a.prev").click(function(){
		lb_cur--;
		showProducts();
	});
	$("a.next").click(function(){
		lb_cur++;
		showProducts();
	});

});




// 用
$(function(){
	var head=$("#Heade").height();
	var hdMenuBox=$(".hdMenuBox").height();
	var banner=$(".banner_div").height();
	var gallery_banner=$(".gallery_banner").height();
	var main=$(".main").height();
	var filter_container=$(".filter_container").height();
	var gallery_show=$(".gallery_show").height();
	// var $window_height=$window.height();
	var m=head+banner+gallery_banner+115;
	// var n=m+main-filter_container;
	var n=m+gallery_show-filter_container;
	// console.log($window_height)
	console.log(m)



	// var width=$(window).width();
	// $(window).width()
	// @media (max-width: 1300px)
	// var Width =parseFloat( $(@media).width())
	// console.log(Width);


	// 用
		  $(window).scroll(function(){
		var topScrl=$(window).scrollTop();
		console.log(topScrl)
			  if (topScrl>m && topScrl<n) {
		  $(".gallery_filter").css("position","fixed").css("top","60px")






		//   .css("bottom",0).css("top","initial");;
		//   $(".hdMenu").css("height","60px");
		//   $(".Logo").css("height","60px").css("background-size","auto 36px");
		//   $(".hdSearch").css("margin-top","7px");
		//   $(".Menu").css("margin-top","7px");
		//   $(".box11").css("top","53px");
		//   $(".box22").css("top","53px");
		//   $("#cur").css("cssText","height:111px !important");


		// 	用

			  }else{
		  $(".gallery_filter").css("position","relative").css("top",0)







		//   $(".hdMenu").css("height","130px");
		//   $(".Logo").css("height","130px").css("background-size","150px auto");
		//   $(".hdSearch").css("margin-top","71px");
		//   $(".Menu").css("margin-top","70px");
		//   $(".box11").css("top","110px");
		//   $(".box22").css("top","110px");
		//   $("#cur").css("height","0px")


	// 	用
		}
	  })
	})
	$(window).ready(function(){
		var $width = $("#img").width();
		var $div = $(".gallery_filter");
		console.log($width)
		$div.css("max-width",$width*1.5+"px")
		console.log($width)
	});
	$(window).resize(function(){
		var $width = $("#img").width();
		var $div = $(".gallery_filter")
		$div.css("max-width",$width*3/2+"px")
		// console.log($width)
	});




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