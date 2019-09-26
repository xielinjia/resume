// 头部轮播图-------------
$(function(){
    var $imgs=$("#ul-imgs");//轮播的图片
    var $uls=$("#ul-idxs>li");//轮播指示器
    var $btnl=$("#btn-left>img");//左按钮
    var $btnr=$("#btn-right>img");//右按钮
    var i = 0;//记录图片张数
//用于获取轮播图图片每次移动距离
    var $imgWidth =parseFloat( $(".slider  ul li").css("width"));
    console.log($imgWidth)
//当时动态数据的时候使用,上面那个删除
// var imgLength =0;
//设置底部第一个按钮样式
    function move(){
        i++;
        moveTo();
    }
//定时器
    var timer=setInterval(move,2000);
//图片移动效果
    function moveTo(str){
        if(i==4){
            $imgs.animate({"margin-left":-i*$imgWidth},500)
            i=0;
            $imgs.animate({"margin-left":0},0)
        }else if((str=="prev") && (i==-1)){
            i=3;
            $imgs.animate({"margin-left":-i*$imgWidth},500)
        }else{
            $imgs.animate({"margin-left":-i*$imgWidth},500)
        }
        $uls.eq(i).addClass("active").siblings("li").removeClass("active");
    }
//轮播指示器效果
    var canClick=true;
    $uls.click(function(){
        if(canClick){
            i=$(this).index();
            moveTo();
            canClick=false;
            setTimeout(function(){
                canClick=true;
            },600)
        }
    });
//指上停止/离开自动
    var $car=$(".slider");
    $car.mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer=setInterval(move,2000)
    })
//左右箭头控制i变化
    var canClick=true;
    $btnr.click(function(){
        i++;
        moveTo()
    });
    var canClick=true;
    $btnl.click(function(){
        i--;
        moveTo("prev")
    })
});

//中部三图轮播-------------
$(function(){
    var $banner=$(".swiper_container>.banner");//轮播内容(图片+文字)
    var $btnl2=$(".index_article>.prevBtn");//左按钮
    var $btnr2=$(".index_article>.nextBtn")//右按钮
    var l=0;//记录内容张数(图片+文字)
    var $boxWidth =parseFloat( $(".index_article  ul li").css("width"));
    console.log($boxWidth)//单次移动盒子内容宽度
//     function move(){
//         l++;
//         moveTo();
//     }
//     var timer=setInterval(move,2000);
//     function moveTo(str){
//         if(l==0){
//             $banner.css("margin-left",-3*$boxWidth+"px");
//         }else if((l=-2)&&(str=="prev")){
//             l=4;
//             $banner.css("margin-left",l*$boxWidth+"px");
//         }else if(l=5){
//             l=0;
//             $banner.css("margin-left",-3*$boxWidth+"px");
//         }else{
//             $banner.animate({"margin-left":(l-3)*$boxWidth},500)
//         }
//     }
//     var $box=$(".swiper_container");
//     $box.mouseenter(function(){
//         clearInterval(timer);
//     }).mouseleave(function(){
//         timer=setInterval(move,2000)
//     })

//     var canClick=true;
//     $btnr2.click(function(){
//         l++;
//         moveTo()
//     });
//     var canClick=true;
//     $btnl2.click(function(){
//         if(canClick){
//             l=$(this).index();
//             moveTo();
//             canClick=false;
//             setTimeout(function(){
//                 canClick=true;
//             },600)
//         l--;
//         moveTo("prev")
//     }
// })

$btnr2.click(function(){
	l++;
	var len=$(".index_article  ul li").length;
	console.log(len);
	if(l+5>len){
		$(".index_article  ul").stop().append($("ul.banner").html());
	}
	$(".index_article  ul.banner").stop().animate({left:-l*$boxWidth},1000);
	});

	
$btnl2.click(function(){
	if(l==0){
		$("ul.banner").prepend($("ul.banner").html());
		$("ul.banner").css("left","-4*$boxWidth");
		l=6
	}
	l--;
	$(".index_article  ul.banner").stop().animate({left:-l*$boxWidth},1000);
	});








 })