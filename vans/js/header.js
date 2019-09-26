// 搜索框点击显示隐藏样式
// 点击显示
$("#inputBox").click(function(){
    $(".hotSearch").show();
})
// 点击其他地方隐藏
$(document).mouseup(function (e) {
    var inputBox1 = $('#inputBox');
    var hotSearch1=$('.hotSearch');
    if (!inputBox1.is(e.target) && inputBox1.has(e.target).length === 0 && !hotSearch1.is(e.target) && hotSearch1.has(e.target).length === 0) {
        $('.hotSearch').hide()
    }
})
// // mouseover/hover显示
// $(".a1").mouseover(function(){
//     $(".box1").show();
// })
// // 离开隐藏
// $(".box1").mouseleave(function(){
//     $(".box1").hide();
//   });


// $(".a2").hover(function(){
//     $(".box2").show();
// })
// $(".box2").mouseleave(function(){
//     $(".box2").hide();
//   });


// $(".a3").hover(function(){
//     $(".box3").show();
// })
// $(".box3").mouseleave(function(){
//     $(".box3").hide();
//   });


// $(".a4").hover(function(){
//     $(".box4").show();
// })
// $(".box4").mouseleave(function(){
//     $(".box4").hide();
//   });


// $(".a5").hover(function(){
//     $(".box5").show();
// })
// $(".box5").mouseleave(function(){
//     $(".box5").hide();
//   });


// $(".a6").hover(function(){
//     $(".box6").show();
// })
// $(".box6").mouseleave(function(){
//     $(".box6").hide();
//   });
$(function(){
    $.ajax({
      url:"header.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("#Heade");
        $(`<link rel="stylesheet" href="css/header11.css"/>`).appendTo("head");
      }
    })
  })


  $(function(){
  var head=$(".header").height();
  // var width=$(window).width();
  // $(window).width()
  // @media (max-width: 1300px)
  // var Width =parseFloat( $(@media).width())
  // console.log(Width);
		$(window).scroll(function(){
      var topScr=$(window).scrollTop();
      console.log(topScr)
			if (topScr>head) {
        $(".hdMenuBox").css("position","fixed");
        $(".hdMenu").css("height","60px");
        $(".Logo").css("height","60px").css("background-size","auto 36px");
        $(".hdSearch").css("margin-top","7px");
        $(".Menu").css("margin-top","7px");
        $(".box11").css("top","60px");
        $(".box22").css("top","60px");
        $("#cur").css("cssText","height:111px !important");
			}else{
        $(".hdMenuBox").css("position","relative");
        $(".hdMenu").css("height","130px");
        $(".Logo").css("height","130px").css("background-size","150px auto");
        $(".hdSearch").css("margin-top","71px");
        $(".Menu").css("margin-top","70px");
        $(".box11").css("top","135px");
        $(".box22").css("top","135px");
        $("#cur").css("height","0px")
      }
      // if(width<=1300px)
    })
  })
