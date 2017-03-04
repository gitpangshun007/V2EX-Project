$(function(){
           $(".sale_tab li a").click(function(){
             $(this).parent().addClass("pink")
             .siblings().removeClass("pink");
             var index=$(".sale_tab li a").index(this);
             var width=$(".production").find("li").outerWidth();
             var widthAll=width*4;
             $(".production").stop(true,false).animate({left:-widthAll*index},1000);
             
           }).eq(0).click();
        });