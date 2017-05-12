 $(function(){
          var $li=$("#skin li");
          $li.click(function(){
            $("#"+this.id).addClass("select").
            siblings().removeClass("select");
            $("#cssfiles").attr("href","https://raw.githubusercontent.com/gitpangshun007/V2EX/master/public/css/theme/"+this.id+".css");
          });
       });

 https://raw.githubusercontent.com/gitpangshun007/V2EX/master/public/css/theme/skin_0.css