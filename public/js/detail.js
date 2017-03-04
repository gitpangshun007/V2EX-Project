/*tab选项卡*/
$(function(){
	var $tabA=$(".des_tab_title ul li a");
	var $div_content=$(".des_tab_content div");
	$tabA.bind("click",function(){
		var index=$tabA.index(this);
		$tabA.parent().eq(index).addClass("tts")
		.siblings().removeClass("tts");
        $div_content.eq(index).show()
        .siblings().hide();
		return false;
	}).eq(0).trigger("click");
});
/*颜色选项卡*/
$(function(){
	var $clothesColor=$("#clothesColor strong");
	var $tabColor=$(".clothes_color li a");
	$tabColor.bind("click",function(){
		var index=$tabColor.index(this);
		$clothesColor.eq(index+1).show().siblings().hide();
		$tabColor.parent().eq(index).addClass("ttb")
		.siblings().removeClass("ttb");
		return false;
	})
});
/*尺码选项卡*/
$(function(){
	var $clothesSize=$("#clothesSize strong");
	var $tabSize=$(".clothes_size li a");
	$tabSize.bind("click",function(){
		var index=$tabSize.index(this);
		$clothesSize.eq(index).show().siblings().hide();
		$tabSize.parent().eq(index).addClass("tts").siblings().removeClass("tts");
		return false;
	});
});
/*价格变动*/
$(function(){
	
    $("#clothesNumber").change(function(){

    	var price=$("#clothes_price strong").text();
        var num=$(this).val();
        var priceAll=num*200;
        $("#clothes_price strong").text(priceAll);
        
    }).change();
});
/*星级评价*/
$(function(){
	var $star=$(".rating li a");
	$star.bind("click",function(){
		var index=$star.index(this);
		var title=$(this).parent().attr("title");
		var cl=$(this).parent().attr("class");
		alert("你对该商品的评分是：" + title +"分");
		$(this).parent().parent().addClass(cl+"star");
		return false;
	});
});
/*点击清晰图片显示相对应的大图片*/
$(function(){
	$(".des_img_small ul li a").bind("click",function(){
		var route=$(this).find("img").attr("src");
		var i=route.lastIndexOf('.');
		var unit=route.substring(i);
		var name=route.substring(0,i);
		var bigName=name+ "_big" + unit;
		$("#thickimg").attr("href",bigName);
	});
});
/*购物车点击效果*/
$(function(){
	$('#cart').bind('click',function(){
	var price=$('.throughLine strong').text();
    var discountPrice=$('.discount_price em').text();
    var color=$('#clothesColor strong').text();
    var size=$('#clothesSize strong').text();
    var number=$('#clothesNumber').val();
    var totalPrice=$('#clothes_price strong').text();
    var dialog="感谢您购买：\n"+
               "原价:"+price+"\n"+
               "折后价:"+discountPrice+"\n"+
               "颜色:"+color+"\n"+
               "尺码:"+size+"\n"
   alert(dialog);
   return false;
   
	})
    
});