 $(function(){
          var $li=$("#skin li");
          $li.click(function(){
            $("#"+this.id).addClass("select").
            siblings().removeClass("select");
            $("#cssfiles").attr("href","public/css/theme/"+this.id+".css");
          });
       });