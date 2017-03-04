 $(function(){
        var $rolllist=$(".advert_link a");
        var index=0;
        var len=$rolllist.length;
        var Timer=null;
/*放到缩略图显示相应索引的大图片*/
        $rolllist.bind("mouseover",function(){
            var index=$rolllist.index(this);
            showImg(index);
        }).eq(0).trigger("mouseover");
/*自动播放的定时器*/
        $("#advert").hover(function(){
            if(Timer){
                clearInterval(Timer);
            }
        },function(){
            Timer=setInterval(function(){
                showImg(index);
                index++;
                if(index==len){index=0;}
            },3000);
        }).trigger("mouseout");
      });
/*显示图片的函数*/
      function showImg(index){
           $(".advertA").find("img").eq(index)
           .stop(true,true).fadeIn().siblings().fadeOut();
           $(".advert_link a").eq(index).addClass("advert_add")
           .siblings().removeClass("advert_add");
      }