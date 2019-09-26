// checkbox选项框样式转换
$(document).ready(function(){
    var flag = 0;
    $("ul>li:nth-child(6) .checked").click(function(){
        if(flag == 1){
            $(".checked").css("background","url(/image/checkbox-acitve.svg) center center no-repeat").css("background-size","16px 16px");
            flag = 0;
        } else{
            $(".checked").css("background","url(/image/checkbox-inacitve.svg) center center no-repeat").css("background-size","16px 16px");
            flag = 1;
        }
    })
});