$(function(){
   	   	  var $li=$(".topic_captain li"); 
   	   	  $li.click(function(){
   	   	  	$(this).addClass("selected")
   	   	  	.siblings().removeClass("selected")
   	   	  	.end().children().css({"color":"white"});
           $(".topic_captain li:not(.selected)").children()
           .css({"color":"#9e9e9e"});
           var index=$li.index(this);
           $("div.topic_content > div").eq(index)
           .show().siblings().hide();
   	   	  }).hover(function(){
   	   	  	 $(this).addClass("hover");
   	   	  },function(){
             $(this).removeClass("hover");
   	   	  });

   	   });
