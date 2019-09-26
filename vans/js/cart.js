$(function(){
$(window).ready(function(){
    var $width = $(".parent_head").width();
    var $widtha = $(".count").width();
    console.log($width)
    $(".caozuo").css("width",$width-$widtha*4.7-514+"px")
    console.log($widtha)
});
window.onresize=resizeBannerImage;
function resizeBannerImage(){
    var $width = $(".parent_head").width();
    var $widtha = $(".count").width();
    console.log($width)
    $(".caozuo").css("width",$width-$widtha*4.7-514+"px")
    
    console.log($widtha)
};
})


// checkbox选项框样式转换
$(document).ready(function(){
    var flag = 0;
    $("span>label.checked").click(function(){
        if(flag == 1){
            $("span>label.checked").css("background","url(/image/checkbox-acitve.svg) no-repeat 5px center ").css("background-size","16px 16px");
            flag = 0;
        } else{
            $("span>label.checked").css("background","url(/image/checkbox-inacitve.svg)  no-repeat 5px center ").css("background-size","16px 16px");
            flag = 1;
        }
    })
});




// $(function(){
// $(window).ready(function(){
//     var $width = $(".parent").width();
//     var $widtha = $(".count").width();
//     var $Thead = $(".THEAD").width();
//     console.log($width)
//     $(".parent").css("width",$Thead+"px")
//     $(".caozuo").css("width",$width-$widtha*4.7-506+"px")
//     console.log($widtha)
// });
// window.onresize=resizeBannerImage;
// function resizeBannerImage(){
//     var $width = $(".parent").width();
//     var $widtha = $(".count").width();
//     var $Thead = $(".THEAD").width();
//     console.log($width)
//     $(".parent").css("width",$Thead+"px")
//     $(".caozuo").css("width",$width-$widtha*4.7-506+"px")
    
//     console.log($widtha)
// };
// })