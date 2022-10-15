$( document ).ready(function() {
  $("#foron").click(function(){
    $("#foron_1").css("display","block");
    $("#foron").css("display","none");    
    
    $("body").css("background","rgb(33,37,41)");
    $("body").css("color","white");  
    
  });
});
$( document ).ready(function() {
  $("#foron_1").click(function(){
    $("#foron").css("display","block");
    $("#foron_1").css("display","none"); 
    
    
    
    
    $("body").css("background","white");
    $("body").css("color","black");   
  });
});
$(document).ready(function(){
  $(".GO_on").click(function(){
    $("#go_on_1").css("display", "none");
    $("#go_on_2").css("display", "none");
    $("#go_on").css("display", "block");
    });
});
$(document).ready(function(){
  $(".GO_on_1").click(function(){
    $("#go_on_1").css("display", "block");
    $("#go_on_2").css("display", "none");
    $("#go_on").css("display", "none");
    });
});
$(document).ready(function(){
  $(".GO_on_2").click(function(){
    $("#go_on_2").css("display", "block");
    $("#go_on_1").css("display", "none"); 
    $("#go_on").css("display", "none");
    });
});
$(document).ready(function(){
  $(".sho_mob").click(function(){
    $(".set_mobile").slideDown();
    $(".set_mobile").css("display", "block");
    $(".sho_mob").css("display", "none");
    $(".sho_mob_x").css("display", "block");
    
    });
});


$(document).ready(function(){
  $(".sho_mob_x").click(function(){
    $(".set_mobile").slideUp();
    $(".set_mobile").css("display", "none");
    $(".sho_mob").css("display", "block");
    $(".sho_mob_x").css("display", "none");  
  });
});