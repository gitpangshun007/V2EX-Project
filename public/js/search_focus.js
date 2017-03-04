$(function(){
          
          $("#search").focus(function(){
            $(this).val("");
          }).blur(function(){
            $(this).val(this.defaultValue);
          });
       });