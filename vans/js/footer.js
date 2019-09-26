$(function(){
    $.ajax({
      url:"footer.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("#maxFooter");
        $(`<link rel="stylesheet" href="css/comm.css"/>`).appendTo("footer");
      }
    })
  })

  $(function(){

    $(".b-country").click(function(){
      var DIV = $(".country-list");
      if(DIV.css("display")=="none"){
        DIV.slideDown("fast");
      }else{
        DIV.slideUp("fast");
      }
    });
    
    
    // $(".selected-sort a").click(function(){
    //   var txt = $(this).text();
    //   // $(".selected-sort").html(txt);
    //   // var value = $(this).attr("data-sort");
    //   // $(".selected-sort").hide();
    //       $(".right_box>span").html(txt);
    //       $(".selected-sort a").removeClass("active");
    //       $(this).addClass("active");
    // });
  
  });