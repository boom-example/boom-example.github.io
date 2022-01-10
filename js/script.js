$(document).ready(function(){
  
  $("#main-1").show();
  $("#main-2").hide();
  $("#main-3").hide();
  $(".mute").hide();
  $("#content-1").hide();
  $("#content-2").hide();
  $("#content-3").hide();


  $(".home").click(function(){
    $("#iframe-1").hide();
    $("#body").show();
    $("#main-1").hide();
    $("#main-2").hide();

    $("#content-1").show();
    $("#content-2").show();
    $("#content-3").show();
    $("#main-3").show();
    $(".main-bg").show();
});



  
  $("#main-1").click(function(){
      $("#main-1").hide();
      $("#main-2").show();
  });

  
  $("#main-2").click(function(){
      $("#main-1").hide();
      $("#main-2").hide();
      $("#main-3").show();
      $("#content-1").show();
      $("#content-2").show();
      $("#content-3").show();
  });

  $(".bgm-on").click(function(){
      $(".bgm-on").hide();
      $(".mute").show();
      
  });
  $(".mute").click(function(){
      $(".bgm-on").show();
      $(".mute").hide();
  });

  $("#content-1").click(function(){
    $("iframe").show();
    $("#body").hide();
    $("#content-1").hide();
    $("#content-2").hide();
    $("#content-3").hide();
});
  $("#content-2").click(function(){
    $("iframe").show();
    $("#body").hide();
    $("#content-1").hide();
    $("#content-2").hide();
    $("#content-3").hide();
});
  $("#content-3").click(function(){
    $("iframe").show();
    $("#body").hide();
    $("#content-1").hide();
    $("#content-2").hide();
    $("#content-3").hide();
});


});