 $(function(){
          var x=10;
          var y=20;
          $(".td_right a").mouseover(function(e){
            this.myTitle=this.title;
            this.title="";
            var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
            $("body").append(tooltip);
            $("#tooltip").css({
/*记住要在CSS中设置位置为绝对位置*/
                "top":(e.pageY+y)+"px",
                "left":(e.pageX+x)+"px"
            }).show();

          }).mouseout(function(){
/*要重新把myTitle赋给title，否则会出现无标题的结果*/
              this.title=this.myTitle;
              $("#tooltip").remove();
          });
       });